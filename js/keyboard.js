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
  //keyboard event handlers
  "use strict";
  //reordered
  const R_PAD = 0x00010000;
  const L_PAD = 0x00020000;
  const D_PAD = 0x00040000;
  const U_PAD = 0x00080000;
  const START_BUTTON = 0x10000000;
  const UNKNOWN_BUTTON = 0x00200000;
  const R_TRIG = 0x00400000;
  const L_TRIG = 0x00800000;
  const R_CBUTTON = 0x01000000;
  const L_CBUTTON = 0x02000000;
  const D_CBUTTON = 0x04000000;
  const U_CBUTTON = 0x08000000;
  const A_BUTTON = 0x80000000 | 0;
  const B_BUTTON = 0x40000000;
  const Z_TRIG = 0x20000000;
  const Y_AXIS = 0x000000FF;
  const X_AXIS = 0x0000FF00;
  const LEFT_MAX = 0x000008000;
  const RIGHT_MAX = 0x00007F00;
  const UP_MAX = 0x00000007F;
  const DOWN_MAX = 0x00000080;
  C1964jsPif.prototype.onKeyDown = function(e) {
    if (e) {
      switch (e.which) {
        case 40:
          this.g1964buttons = (this.g1964buttons & 0xffffff00) | DOWN_MAX;
          break;
        case 38:
          this.g1964buttons = (this.g1964buttons & 0xffffff00) | UP_MAX;
          break;
        case 39:
          this.g1964buttons = (this.g1964buttons & 0xffff00ff) | RIGHT_MAX;
          break;
        case 37:
          this.g1964buttons = (this.g1964buttons & 0xffff00ff) | LEFT_MAX;
          break;
        case 13:
          this.g1964buttons |= START_BUTTON;
          break;
        case 90: //z
          this.g1964buttons |= A_BUTTON;
          break;
        case 83: //s
          this.g1964buttons |= D_PAD;
          break;
        case 87: //w
          this.g1964buttons |= U_PAD;
          break;
        case 68: //d
          this.g1964buttons |= R_PAD;
          break;
        case 65: //a
          this.g1964buttons |= L_PAD;
          break;
        case 88: //x
          this.g1964buttons |= B_BUTTON;
          break;
        case 73: //i
          this.g1964buttons |= U_CBUTTON;
          break;
        case 74: //j
          this.g1964buttons |= L_CBUTTON;
          break;
        case 75: //k
          this.g1964buttons |= D_CBUTTON;
          break;
        case 76: //l
          this.g1964buttons |= R_CBUTTON;
          break;
        case 32: //space
          this.g1964buttons |= Z_TRIG;
          break;
        case 49: //1
          this.g1964buttons |= L_TRIG;
          break;
        case 48: //0
          this.g1964buttons |= R_TRIG;
      }
    }
  };

  C1964jsPif.prototype.onKeyUp = function(e) {
    if (e) {
      switch (e.which) {
        case 40:
          this.g1964buttons &= ~DOWN_MAX;
          break;
        case 38:
          this.g1964buttons &= ~UP_MAX;
          break;
        case 39:
          this.g1964buttons &= ~RIGHT_MAX;
          break;
        case 37:
          this.g1964buttons &= ~LEFT_MAX;
          break;
        case 13:
          this.g1964buttons &= ~START_BUTTON;
          break;
        case 90: //z
          this.g1964buttons &= ~A_BUTTON;
          break;
        case 83: //s
          this.g1964buttons &= ~D_PAD;
          break;
        case 87: //w
          this.g1964buttons &= ~U_PAD;
          break;
        case 68: //d
          this.g1964buttons &= ~R_PAD;
          break;
        case 65: //a
          this.g1964buttons &= ~L_PAD;
          break;
        case 88: //x
          this.g1964buttons &= ~B_BUTTON;
          break;
        case 73: //i
          this.g1964buttons &= ~U_CBUTTON;
          break;
        case 74: //j
          this.g1964buttons &= ~L_CBUTTON;
          break;
        case 75: //k
          this.g1964buttons &= ~D_CBUTTON;
          break;
        case 76: //l
          this.g1964buttons &= ~R_CBUTTON;
          break;
        case 32: //space
          this.g1964buttons &= ~Z_TRIG;
          break;
        case 49: //1
          this.g1964buttons &= ~L_TRIG;
          break;
        case 48: //2
          this.g1964buttons &= ~R_TRIG;
          break;
        case 27: //escape
          toggleUi();
      }
    }
  };

}).call(this);