// Generated by CoffeeScript 2.5.1
(function() {
  /*1964js - JavaScript/HTML5 port of 1964 - N64 emulator
  Copyright (C) 2012 Joel Middendorf

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.*/
  var C1964jsWebGL, root;

  //globals log, document, alert, mat4
  //jslint bitwise: true, todo: true
  //TODO: parameterize "Canvas3D" so this dom id can be arbitrary.
  C1964jsWebGL = function(core, wireframe) {
    "use strict";
    this.gl = undefined;
    this.core = core;
    this.webGLStart(wireframe);
    return this;
  };

  (function() {
    "use strict";
    var mvMatrix, mvMatrixStack, pMatrix;
    pMatrix = void 0;
    mvMatrixStack = void 0;
    mvMatrix = mat4.create();
    mvMatrixStack = [];
    pMatrix = mat4.create();
    C1964jsWebGL.prototype.initGL = function(canvas) {
      try {
        log("canvas = " + canvas);
        log("canvas.getContext = " + canvas.getContext);
        this.gl = canvas.getContext("webgl") || canvas.getContext("moz-webgl") || canvas.getContext("webkit-3d") || canvas.getContext("experimental-webgl");
        log("gl = " + this.gl);
        this.gl.viewportWidth = canvas.width;
        log("this.gl.viewportWidth = " + this.gl.viewportWidth);
        this.gl.viewportHeight = canvas.height;
        log("this.gl.viewportHeight = " + this.gl.viewportHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      } catch (error) {}
      if (!this.gl) {
        log("Could not initialize WebGL. Your browser may not support it.");
      }
    };
    C1964jsWebGL.prototype.createShader = function(type, source) {
      var shader, success;
      shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
      if (success) {
        return shader;
      }
      console.log(this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
    };
    C1964jsWebGL.prototype.initShaders = function(fs, vs) {
      var fragmentShader, fragmentShaderSource, shaderProgram, vertexShader, vertexShaderSource;
      shaderProgram = void 0;
      vertexShaderSource = document.getElementById("vertex-shader").text;
      fragmentShaderSource = document.getElementById("fragment-shader").text;
      vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);
      fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
      shaderProgram = this.gl.createProgram();
      this.gl.attachShader(shaderProgram, vertexShader);
      this.gl.attachShader(shaderProgram, fragmentShader);
      this.gl.linkProgram(shaderProgram);
      if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
        alert("Could not initialize shaders");
      }
      this.gl.useProgram(shaderProgram);
      shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
      shaderProgram.vertexColorAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexColor");
      shaderProgram.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
      shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
      shaderProgram.textureCoordAttribute = this.gl.getAttribLocation(shaderProgram, "aTextureCoord");
      shaderProgram.samplerUniform = this.gl.getUniformLocation(shaderProgram, "uSampler");
      shaderProgram.wireframeUniform = this.gl.getUniformLocation(shaderProgram, "uWireframe");
      shaderProgram.uCombineA0 = this.gl.getUniformLocation(shaderProgram, "uCombineA0");
      shaderProgram.uCombineB0 = this.gl.getUniformLocation(shaderProgram, "uCombineB0");
      shaderProgram.uCombineC0 = this.gl.getUniformLocation(shaderProgram, "uCombineC0");
      shaderProgram.uCombineD0 = this.gl.getUniformLocation(shaderProgram, "uCombineD0");
      shaderProgram.uCombineA0a = this.gl.getUniformLocation(shaderProgram, "uCombineA0a");
      shaderProgram.uCombineB0a = this.gl.getUniformLocation(shaderProgram, "uCombineB0a");
      shaderProgram.uCombineC0a = this.gl.getUniformLocation(shaderProgram, "uCombineC0a");
      shaderProgram.uCombineD0a = this.gl.getUniformLocation(shaderProgram, "uCombineD0a");
      shaderProgram.uCombineA1 = this.gl.getUniformLocation(shaderProgram, "uCombineA1");
      shaderProgram.uCombineB1 = this.gl.getUniformLocation(shaderProgram, "uCombineB1");
      shaderProgram.uCombineC1 = this.gl.getUniformLocation(shaderProgram, "uCombineC1");
      shaderProgram.uCombineD1 = this.gl.getUniformLocation(shaderProgram, "uCombineD1");
      shaderProgram.uCombineA1a = this.gl.getUniformLocation(shaderProgram, "uCombineA1a");
      shaderProgram.uCombineB1a = this.gl.getUniformLocation(shaderProgram, "uCombineB1a");
      shaderProgram.uCombineC1a = this.gl.getUniformLocation(shaderProgram, "uCombineC1a");
      shaderProgram.uCombineD1a = this.gl.getUniformLocation(shaderProgram, "uCombineD1a");
      shaderProgram.uPrimColor = this.gl.getUniformLocation(shaderProgram, "uPrimColor");
      shaderProgram.uFillColor = this.gl.getUniformLocation(shaderProgram, "uFillColor");
      shaderProgram.uEnvColor = this.gl.getUniformLocation(shaderProgram, "uEnvColor");
      shaderProgram.uBlendColor = this.gl.getUniformLocation(shaderProgram, "uBlendColor");
      //shaderProgram.otherModeL = @gl.getUniformLocation(shaderProgram, "otherModeL")
      //shaderProgram.otherModeH = @gl.getUniformLocation(shaderProgram, "otherModeH")
      shaderProgram.cycleType = this.gl.getUniformLocation(shaderProgram, "cycleType");
      shaderProgram.uAlphaTestEnabled = this.gl.getUniformLocation(shaderProgram, "uAlphaTestEnabled");
      return shaderProgram;
    };
    C1964jsWebGL.prototype.setCombineUniforms = function(vhle, shaderProgram) {
      this.gl.uniform1i(shaderProgram.uCombineA0, vhle.combine[0]);
      this.gl.uniform1i(shaderProgram.uCombineB0, vhle.combine[2]);
      this.gl.uniform1i(shaderProgram.uCombineC0, vhle.combine[4]);
      this.gl.uniform1i(shaderProgram.uCombineD0, vhle.combine[6]);
      this.gl.uniform1i(shaderProgram.uCombineA0a, vhle.combine[1]);
      this.gl.uniform1i(shaderProgram.uCombineB0a, vhle.combine[3]);
      this.gl.uniform1i(shaderProgram.uCombineC0a, vhle.combine[5]);
      this.gl.uniform1i(shaderProgram.uCombineD0a, vhle.combine[7]);
      this.gl.uniform1i(shaderProgram.uCombineA1, vhle.combine[8]);
      this.gl.uniform1i(shaderProgram.uCombineB1, vhle.combine[10]);
      this.gl.uniform1i(shaderProgram.uCombineC1, vhle.combine[12]);
      this.gl.uniform1i(shaderProgram.uCombineD1, vhle.combine[14]);
      this.gl.uniform1i(shaderProgram.uCombineA1a, vhle.combine[9]);
      this.gl.uniform1i(shaderProgram.uCombineB1a, vhle.combine[11]);
      this.gl.uniform1i(shaderProgram.uCombineC1a, vhle.combine[13]);
      this.gl.uniform1i(shaderProgram.uCombineD1a, vhle.combine[15]);
    };
    C1964jsWebGL.prototype.setMatrixUniforms = function(shaderProgram) {
      this.gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
      this.gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    };
    //@gl.uniformMatrix4fv shaderProgram.nMatrixUniform, false, nMatrix
    C1964jsWebGL.prototype.beginDList = function() {
      var aspectHeight, aspectWidth, nativeAspect, newAspect, stretch, x, y;
      // matrices for quad tiles only
      //@gl.viewport 0, 0, @gl.viewportWidth, @gl.viewportHeight
      newAspect = self.innerWidth / self.innerHeight;
      aspectWidth = this.gl.viewportWidth;
      aspectHeight = this.gl.viewportHeight;
      x = 0;
      y = 0;
      this.gl.viewport(x, y, aspectWidth, aspectHeight);
      //needed for game selection screen in mario
      //mat4.perspective 90, (@gl.viewportWidth/@gl.viewportHeight), 1.0, 1023.0, pMatrix
      mat4.identity(mvMatrix);
      mat4.identity(pMatrix);
      mat4.translate(mvMatrix, [0.0, 0.0, -(this.gl.viewportWidth / this.gl.viewportHeight)]);
    };
    C1964jsWebGL.prototype.webGLStart = function(wireframe) {
      var canvas3D;
      canvas3D = document.getElementById("Canvas3D");
      this.initGL(canvas3D);
      this.shaderProgram = this.initShaders("fragment-shader", "vertex-shader");
      if (this.gl) {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
      }
      canvas3D.style.visibility = "hidden";
    };
    C1964jsWebGL.prototype.show3D = function() {
      var canvas2D, canvas3D;
      canvas3D = document.getElementById("Canvas3D");
      canvas3D.style.visibility = "visible";
      canvas2D = document.getElementById("Canvas");
      canvas2D.style.visibility = "hidden";
    };
    return C1964jsWebGL.prototype.hide3D = function() {
      var canvas2D, canvas3D;
      canvas3D = document.getElementById("Canvas3D");
      canvas3D.style.visibility = "hidden";
      canvas2D = document.getElementById("Canvas");
      canvas2D.style.visibility = "visible";
    };
  })();

  //hack global space until we export classes properly
  //node.js uses exports; browser uses this (window)
  root = typeof exports !== "undefined" && exports !== null ? exports : self;

  root.C1964jsWebGL = C1964jsWebGL;

}).call(this);
