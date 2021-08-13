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
  C1964jsEmulator.prototype.flushDynaCache = function() {
    "use strict";
    var pc;
    pc = void 0;
    while (this.kk) {
      this.kk -= 1;
      this.deleteFunction(this.kk);
    }
    this.fnLut = new Map();
    this.s = void 0;
  };

  //must not use strict here.
  C1964jsEmulator.prototype.deleteFunction = function(k) {
    var fnName, s, splitResult;
    //log('cleanup');
    fnName = void 0;
    splitResult = void 0;
    s = document.getElementsByTagName("script")[k];
    splitResult = s.text.split("_");
    splitResult = splitResult[1].split("=");
    fnName = "_" + splitResult[0];
    s.parentNode.removeChild(s);
    //allow deletion of this function
    eval("if (typeof " + fnName + " !== 'undefined') delete " + fnName + ";");
    self[fnName] = void 0;
    if (self[fnName]) {
      alert("self[fnName] should have been null.");
    }
  };

}).call(this);