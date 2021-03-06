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
  //segments must be at least 64KB in size for lookup table.
  const MEMORY_START_RDRAM = 0x00000000;
  const MEMORY_START_RAMREGS4 = 0x03F04000;
  const MEMORY_SIZE_RAMREGS4 = 0x10000;
  const MEMORY_START_RAMREGS0 = 0x03F00000;
  const MEMORY_START_RAMREGS8 = 0x03F80000;
  const MEMORY_SIZE_RAMREGS0 = 0x10000;
  const MEMORY_SIZE_RAMREGS8 = 0x10000;
  const MEMORY_START_SPMEM = 0x04000000;
  const MEMORY_START_SPREG_1 = 0x04040000;
  const MEMORY_START_SPREG_2 = 0x04080000;
  const MEMORY_START_DPC = 0x04100000;
  const MEMORY_START_DPS = 0x04200000;
  const MEMORY_START_MI = 0x04300000;
  const MEMORY_START_VI = 0x04400000;
  const MEMORY_START_AI = 0x04500000;
  const MEMORY_START_PI = 0x04600000;
  const MEMORY_START_RI = 0x04700000;
  const MEMORY_START_SI = 0x04800000;
  const MEMORY_START_C2A1 = 0x05000000;
  const MEMORY_START_C1A1 = 0x06000000;
  const MEMORY_START_C2A2 = 0x08000000;
  const MEMORY_START_ROM_IMAGE = 0x10000000;
  const MEMORY_START_GIO = 0x18000000;
  const MEMORY_START_C1A3 = 0x1FD00000;
  const MEMORY_START_DUMMY = 0x1FFF0000;
  const MEMORY_SIZE_SPMEM = 0x10000;
  const MEMORY_SIZE_SPREG_1 = 0x10000;
  const MEMORY_SIZE_SPREG_2 = 0x10000;
  const MEMORY_SIZE_DPC = 0x10000;
  const MEMORY_SIZE_DPS = 0x10000;
  const MEMORY_SIZE_MI = 0x10000;
  const MEMORY_SIZE_VI = 0x10000;
  const MEMORY_SIZE_AI = 0x10000;
  const MEMORY_SIZE_PI = 0x10000;
  const MEMORY_SIZE_RI = 0x10000;
  const MEMORY_SIZE_SI = 0x10000;
  const MEMORY_SIZE_C2A1 = 0x10000;
  const MEMORY_SIZE_C1A1 = 0x10000;
  const MEMORY_SIZE_C2A2 = 0x20000;
  const MEMORY_SIZE_GIO = 0x10000;
  const MEMORY_SIZE_C1A3 = 0x10000;
  const MEMORY_SIZE_DUMMY = 0x10000;
  const MEMORY_START_PIF = 0x1FC00000;
  const MEMORY_START_PIF_RAM = 0x1FC007C0;
  const MEMORY_SIZE_PIF = 0x10000;
  const MEMORY_SIZE_ROM = 0x4000000;
  var C1964jsMemoryLE, root;

  C1964jsMemoryLE = class C1964jsMemoryLE extends C1964jsMemory {
    constructor(core) {
      super(core);
      this.romUint16Array = undefined;
      this.romUint32Array = undefined;
      /**
       * @const
       */
      this.u16 = new Uint16Array(this.ramArrayBuffer);
      /**
       * @const
       */
      this.u32 = new Uint32Array(this.ramArrayBuffer);
      /**
       * @const
       */
      this.spMemUint16Array = new Uint16Array(this.spMemUint8ArrayBuffer);
      /**
       * @const
       */
      this.spReg1Uint16Array = new Uint16Array(this.spReg1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.spReg2Uint16Array = new Uint16Array(this.spReg2Uint8ArrayBuffer);
      /**
       * @const
       */
      this.dpcUint16Array = new Uint16Array(this.dpcUint8ArrayBuffer);
      /**
       * @const
       */
      this.dpsUint16Array = new Uint16Array(this.dpsUint8ArrayBuffer);
      /**
       * @const
       */
      this.miUint16Array = new Uint16Array(this.miUint8ArrayBuffer);
      /**
       * @const
       */
      this.viUint16Array = new Uint16Array(this.viUint8ArrayBuffer);
      /**
       * @const
       */
      this.aiUint16Array = new Uint16Array(this.aiUint8ArrayBuffer);
      /**
       * @const
       */
      this.piUint16Array = new Uint16Array(this.piUint8ArrayBuffer);
      /**
       * @const
       */
      this.siUint16Array = new Uint16Array(this.siUint8ArrayBuffer);
      /**
       * @const
       */
      this.c2a1Uint16Array = new Uint16Array(this.c2a1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c1a1Uint16Array = new Uint16Array(this.c1a1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c2a2Uint16Array = new Uint16Array(this.c2a2Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c1a3Uint16Array = new Uint16Array(this.c1a3Uint8ArrayBuffer);
      /**
       * @const
       */
      this.riUint16Array = new Uint16Array(this.riUint8ArrayBuffer);
      /**
       * @const
       */
      this.pifUint16Array = new Uint16Array(this.pifUint8ArrayBuffer);
      /**
       * @const
       */
      this.gioUint16Array = new Uint16Array(this.gioUint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs0Uint16Array = new Uint16Array(this.ramRegs0Uint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs4Uint16Array = new Uint16Array(this.ramRegs4Uint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs8Uint16Array = new Uint16Array(this.ramRegs8Uint8ArrayBuffer);
      /**
       * @const
       */
      this.dummyReadWriteUint16Array = new Uint16Array(this.dummyReadWriteUint8ArrayBuffer);
      /**
       * @const
       */
      this.spMemUint32Array = new Uint32Array(this.spMemUint8ArrayBuffer);
      /**
       * @const
       */
      this.spReg1Uint32Array = new Uint32Array(this.spReg1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.spReg2Uint32Array = new Uint32Array(this.spReg2Uint8ArrayBuffer);
      /**
       * @const
       */
      this.dpcUint32Array = new Uint32Array(this.dpcUint8ArrayBuffer);
      /**
       * @const
       */
      this.dpsUint32Array = new Uint32Array(this.dpsUint8ArrayBuffer);
      /**
       * @const
       */
      this.miUint32Array = new Uint32Array(this.miUint8ArrayBuffer);
      /**
       * @const
       */
      this.viUint32Array = new Uint32Array(this.viUint8ArrayBuffer);
      /**
       * @const
       */
      this.aiUint32Array = new Uint32Array(this.aiUint8ArrayBuffer);
      /**
       * @const
       */
      this.piUint32Array = new Uint32Array(this.piUint8ArrayBuffer);
      /**
       * @const
       */
      this.siUint32Array = new Uint32Array(this.siUint8ArrayBuffer);
      /**
       * @const
       */
      this.c2a1Uint32Array = new Uint32Array(this.c2a1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c1a1Uint32Array = new Uint32Array(this.c1a1Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c2a2Uint32Array = new Uint32Array(this.c2a2Uint8ArrayBuffer);
      /**
       * @const
       */
      this.c1a3Uint32Array = new Uint32Array(this.c1a3Uint8ArrayBuffer);
      /**
       * @const
       */
      this.riUint32Array = new Uint32Array(this.riUint8ArrayBuffer);
      /**
       * @const
       */
      this.pifUint32Array = new Uint32Array(this.pifUint8ArrayBuffer);
      /**
       * @const
       */
      this.gioUint32Array = new Uint32Array(this.gioUint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs0Uint32Array = new Uint32Array(this.ramRegs0Uint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs4Uint32Array = new Uint32Array(this.ramRegs4Uint8ArrayBuffer);
      /**
       * @const
       */
      this.ramRegs8Uint32Array = new Uint32Array(this.ramRegs8Uint8ArrayBuffer);
      /**
       * @const
       */
      this.dummyReadWriteUint32Array = new Uint32Array(this.dummyReadWriteUint8ArrayBuffer);
      this.readDummy8 = (a) => {
        const off_ = a & 0xFFFC;
        return this.dummyReadWriteUint8Array[off_ ^ 3];
      };
      this.readDummy16 = (a) => {
        const off_ = a & 0xFFFC;
        return this.dummyReadWriteUint16Array[off_ >>> 1 ^ 1];
      };
      this.readDummy32 = (a) => {
        const off_ = a & 0xFFFC;
        return this.dummyReadWriteUint32Array[off_ >>> 2];
      };
      this.readRdram8 = (a) => {
        return this.u8[a ^ 3];
      };
      this.readRdram16 = (a) => {
        return this.u16[a >>> 1 ^ 1];
      };
      this.readRdram32 = (a) => {
        return this.u32[a >>> 2];
      };
      this.readRamRegs0_8 = (a) => {
        const off_ = a - MEMORY_START_RAMREGS0;
        return this.ramRegs0Uint8Array[off_ ^ 3];
      };
      this.readRamRegs0_16 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS0;
        return this.ramRegs0Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readRamRegs0_32 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS0;
        return this.ramRegs0Uint32Array[off_ >>> 2];
      };
      this.readRamRegs4_8 = (a) => {
        const off_ = a - MEMORY_START_RAMREGS4;
        return this.ramRegs4Uint8Array[off_ ^ 3];
      };
      this.readRamRegs4_16 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS4;
        return this.ramRegs4Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readRamRegs4_32 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS4;
        return this.ramRegs4Uint32Array[off_ >>> 2];
      };
      this.readRamRegs8_8 = (a) => {
        const off_ = a - MEMORY_START_RAMREGS8;
        return this.ramRegs8Uint8Array[off_ ^ 3];
      };
      this.readRamRegs8_16 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS8;
        return this.ramRegs8Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readRamRegs8_32 = (a) => {
        const off_ = a-MEMORY_START_RAMREGS8;
        return this.ramRegs8Uint32Array[off_ >>> 2];
      };
      this.readSpMem8 = (a) => {
        const off_ = a - MEMORY_START_SPMEM;
        return this.spMemUint8Array[off_ ^ 3];
      };
      this.readSpMem16 = (a) => {
        const off_ = a-MEMORY_START_SPMEM;
        return this.spMemUint16Array[off_ >>> 1 ^ 1];
      };
      this.readSpMem32 = (a) => {
        const off_ = a-MEMORY_START_SPMEM;
        return this.spMemUint32Array[off_ >>> 2];
      };
      this.readSpReg1_8 = (a) => {
        const off_ = a - MEMORY_START_SPREG_1;
        return this.core.interrupts.readSPReg1(off_);
      };
      this.readSpReg1_16 = (a) => {
        const off_ = a - MEMORY_START_SPREG_1;
        return this.core.interrupts.readSPReg1(off_);
      };
      this.readSpReg1_32 = (a) => {
        const off_ = a - MEMORY_START_SPREG_1;
        return this.core.interrupts.readSPReg1(off_);
      };
      this.readSpReg2_8 = (a) => {
        const off_ = a - MEMORY_START_SPREG_2;
        return this.spReg2Uint8Array[off_ ^ 3];
      };
      this.readSpReg2_16 = (a) => {
        const off_ = (a-MEMORY_START_SPREG_2);
        return this.spReg2Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readSpReg2_32 = (a) => {
        const off_ = (a-MEMORY_START_SPREG_2);
        return this.spReg2Uint32Array[off_ >>> 2];
      };
      this.readDpc8 = (a) => {
        const off_ = a - MEMORY_START_DPC;
        return this.dpcUint8Array[off_ ^ 3];
      };
      this.readDpc16 = (a) => {
        const off_ = a-MEMORY_START_DPC;
        return this.dpcUint16Array[off_ >>> 1 ^ 1];
      };
      this.readDpc32 = (a) => {
        const off_ = a-MEMORY_START_DPC;
        return this.dpcUint32Array[off_ >>> 2];
      };
      this.readDps8 = (a) => {
        const off_ = a - MEMORY_START_DPS;
        return this.dpsUint8Array[off_ ^ 3];
      };
      this.readDps16 = (a) => {
        const off_ = a-MEMORY_START_DPS;
        return this.dpsUint16Array[off_ >>> 1 ^ 1];
      };
      this.readDps32 = (a) => {
        const off_ = a-MEMORY_START_DPS;
        return this.dpsUint32Array[off_ >>> 2];
      };
      this.readMi8 = (a) => {
        const off_ = a - MEMORY_START_MI;
        return this.miUint8Array[off_ ^ 3];
      };
      this.readMi16 = (a) => {
        const off_ = a-MEMORY_START_MI;
        return this.miUint16Array[off_ >>> 1 ^ 1];
      };
      this.readMi32 = (a) => {
        const off_ = a-MEMORY_START_MI;
        return this.miUint32Array[off_ >>> 2];
      };
      this.readVi8 = (a) => {
        const off_ = a - MEMORY_START_VI;
        return this.core.interrupts.readVI(off_);
      };
      this.readVi16 = (a) => {
        const off_ = a - MEMORY_START_VI;
        return this.core.interrupts.readVI(off_);
      };
      this.readVi32 = (a) => {
        const off_ = a - MEMORY_START_VI;
        return this.core.interrupts.readVI(off_);
      };
      this.readAi8 = (a) => {
        const off_ = a - MEMORY_START_AI;
        return this.core.interrupts.readAI(off_);
      };
      this.readAi16 = (a) => {
        const off_ = a - MEMORY_START_AI;
        return this.core.interrupts.readAI(off_);
      };
      this.readAi32 = (a) => {
        const off_ = a - MEMORY_START_AI;
        return this.core.interrupts.readAI(off_);
      };
      this.readPi8 = (a) => {
        const off_ = a - MEMORY_START_PI;
        return this.piUint8Array[off_ ^ 3];
      };
      this.readPi16 = (a) => {
        const off_ = (a-MEMORY_START_PI);
        return this.piUint16Array[off_ >>> 1 ^ 1];
      };
      this.readPi32 = (a) => {
        const off_ = (a-MEMORY_START_PI);
        return this.piUint32Array[off_ >>> 2];
      };
      this.readSi8 = (a) => {
        const off_ = a - MEMORY_START_SI;
        return this.core.interrupts.readSI(off_);
      };
      this.readSi16 = (a) => {
        const off_ = a - MEMORY_START_SI;
        return this.core.interrupts.readSI(off_);
      };
      this.readSi32 = (a) => {
        const off_ = a - MEMORY_START_SI;
        return this.core.interrupts.readSI(off_);
      };
      this.readC2A1_8 = (a) => {
        const off_ = a - MEMORY_START_C2A1;
        return this.c2a1Uint8Array[off_ ^ 3];
      };
      this.readC2A1_16 = (a) => {
        const off_ = a-MEMORY_START_C2A1;
        return this.c2a1Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readC2A1_32 = (a) => {
        const off_ = a-MEMORY_START_C2A1;
        return this.c2a1Uint32Array[off_ >>> 2];
      };
      this.readC1A1_8 = (a) => {
        const off_ = a - MEMORY_START_C1A1;
        return this.c1a1Uint8Array[off_ ^ 3];
      };
      this.readC1A1_16 = (a) => {
        const off_ = a-MEMORY_START_C1A1;
        return this.c1a1Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readC1A1_32 = (a) => {
        const off_ = a-MEMORY_START_C1A1;
        return this.c1a1Uint32Array[off_ >>> 2];
      };
      this.readC2A2_8 = (a) => {
        const off_ = a - MEMORY_START_C2A2;
        return this.c2a2Uint8Array[off_ ^ 3];
      };
      this.readC2A2_16 = (a) => {
        const off_ = (a-MEMORY_START_C2A2);
        return this.c2a2Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readC2A2_32 = (a) => {
        const off_ = (a-MEMORY_START_C2A2);
        return this.c2a2Uint32Array[off_ >>> 2];
      };
      this.readRom8 = (a) => {
        const off_ = a - MEMORY_START_ROM_IMAGE;
        return this.romUint8Array[off_ ^ 3];
      };
      this.readRom16 = (a) => {
        const off_ = a-MEMORY_START_ROM_IMAGE;
        return this.romUint16Array[off_ >>> 1 ^ 1];
      };
      this.readRom32 = (a) => {
        const off_ = a-MEMORY_START_ROM_IMAGE;
        return this.romUint32Array[off_ >>> 2];
      };
      this.readC1A3_8 = (a) => {
        const off_ = a - MEMORY_START_C1A3;
        return this.c1a3Uint8Array[off_ ^ 3];
      };
      this.readC1A3_16 = (a) => {
        const off_ = a-MEMORY_START_C1A3;
        return this.c1a3Uint16Array[off_ >>> 1 ^ 1];
      };
      this.readC1A3_32 = (a) => {
        const off_ = a-MEMORY_START_C1A3;
        return this.c1a3Uint32Array[off_ >>> 2];
      };
      this.readRi8 = (a) => {
        const off_ = a - MEMORY_START_RI;
        return this.riUint8Array[off_ ^ 3];
      };
      this.readRi16 = (a) => {
        const off_ = a-MEMORY_START_RI;
        return this.riUint16Array[off_ >>> 1 ^ 1];
      };
      this.readRi32 = (a) => {
        const off_ = a-MEMORY_START_RI;
        return this.riUint32Array[off_ >>> 2];
      };
      this.readPif8 = (a) => {
        const off_ = a - MEMORY_START_PIF;
        return this.pifUint8Array[off_ ^ 3];
      };
      this.readPif16 = (a) => {
        const off_ = a-MEMORY_START_PIF;
        return this.pifUint16Array[off_ >>> 1 ^ 1];
      };
      this.readPif32 = (a) => {
        const off_ = a-MEMORY_START_PIF;
        return this.pifUint32Array[off_ >>> 2];
      };
      this.readGio8 = (a) => {
        const off_ = a - MEMORY_START_GIO;
        return this.gioUint8Array[off_ ^ 3];
      };
      this.readGio16 = (a) => {
        const off_ = a-MEMORY_START_GIO;
        return this.gioUint16Array[off_ >>> 1 ^ 1];
      };
      this.readGio32 = (a) => {
        const off_ = a-MEMORY_START_GIO;
        return this.gioUint32Array[off_ >>> 2];
      };
      this.writeRdram8 = (val, a) => {
        this.u8[a ^ 3] = val;
      };
      this.writeRdram16 = (val, a) => {
        this.u16[a >>> 1 ^ 1] = val;
      };
      this.writeRdram32 = (val, a) => {
        this.u32[a >>> 2] = val;
      };
      this.writeSpMem8 = (val, a) => {
        const off_ = a - MEMORY_START_SPMEM;
        this.spMemUint8Array[off_ ^ 3] = val;
      };
      this.writeSpMem16 = (val, a) => {
        const off_ = a - MEMORY_START_SPMEM;
        this.spMemUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeSpMem32 = (val, a) => {
        const off_ = a - MEMORY_START_SPMEM;
        this.spMemUint32Array[off_ >>> 2] = val;
      };
      this.writeRi8 = (val, a) => {
        const off_ = a - MEMORY_START_RI;
        this.riUint8Array[off_ ^ 3] = val;
      };
      this.writeRi16 = (val, a) => {
        const off_ = a - MEMORY_START_RI;
        this.riUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeRi32 = (val, a) => {
        const off_ = a - MEMORY_START_RI;
        this.riUint32Array[off_ >>> 2] = val;
      };
      this.writeMi8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_MI;
        this.core.interrupts.writeMI(off_, val, pc, isDelaySlot);
      };
      this.writeMi16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_MI;
        this.core.interrupts.writeMI(off_, val, pc, isDelaySlot);
      };
      this.writeMi32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_MI;
        this.core.interrupts.writeMI(off_, val, pc, isDelaySlot);
      };
      this.writeRamRegs8_8 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS8;
        this.ramRegs8Uint8Array[off_ ^ 3] = val;
      };
      this.writeRamRegs8_16 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS8;
        this.ramRegs8Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeRamRegs8_32 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS8;
        this.ramRegs8Uint32Array[off_ >>> 2] = val;
      };
      this.writeRamRegs4_8 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS4;
        this.ramRegs4Uint8Array[off_ ^ 3] = val;
      };
      this.writeRamRegs4_16 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS4;
        this.ramRegs4Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeRamRegs4_32 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS4;
        this.ramRegs4Uint32Array[off_ >>> 2] = val;
      };
      this.writeRamRegs0_8 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS0;
        this.ramRegs0Uint8Array[off_ ^ 3] = val;
      };
      this.writeRamRegs0_16 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS0;
        this.ramRegs0Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeRamRegs0_32 = (val, a) => {
        const off_ = a - MEMORY_START_RAMREGS0;
        this.ramRegs0Uint32Array[off_ >>> 2] = val;
      };
      this.writeSpReg1_8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_1;
        this.core.interrupts.writeSPReg1(off_, val, pc, isDelaySlot);
      };
      this.writeSpReg1_16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_1;
        this.core.interrupts.writeSPReg1(off_, val, pc, isDelaySlot);
      };
      this.writeSpReg1_32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_1;
        this.core.interrupts.writeSPReg1(off_, val, pc, isDelaySlot);
      };
      this.writePi8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_PI;
        this.core.interrupts.writePI(off_, val, pc, isDelaySlot);
      };
      this.writePi16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_PI;
        this.core.interrupts.writePI(off_, val, pc, isDelaySlot);
      };
      this.writePi32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_PI;
        this.core.interrupts.writePI(off_, val, pc, isDelaySlot);
      };
      this.writeSi8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SI;
        this.core.interrupts.writeSI(off_, val, pc, isDelaySlot);
      };
      this.writeSi16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SI;
        this.core.interrupts.writeSI(off_, val, pc, isDelaySlot);
      };
      this.writeSi32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SI;
        this.core.interrupts.writeSI(off_, val, pc, isDelaySlot);
      };
      this.writeAi8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_AI;
        this.core.interrupts.writeAI(off_, val, pc, isDelaySlot);
      };
      this.writeAi16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_AI;
        this.core.interrupts.writeAI(off_, val, pc, isDelaySlot);
      };
      this.writeAi32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_AI;
        this.core.interrupts.writeAI(off_, val, pc, isDelaySlot);
      };
      this.writeVi8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_VI;
        this.core.interrupts.writeVI(off_, val, pc, isDelaySlot);
      };
      this.writeVi16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_VI;
        this.core.interrupts.writeVI(off_, val, pc, isDelaySlot);
      };
      this.writeVi32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_VI;
        this.core.interrupts.writeVI(off_, val, pc, isDelaySlot);
      };
      this.writeSpReg2_8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_2;
        this.core.interrupts.writeSPReg2(off_, val, pc, isDelaySlot);
      };
      this.writeSpReg2_16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_2;
        this.core.interrupts.writeSPReg2(off_, val, pc, isDelaySlot);
      };
      this.writeSpReg2_32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_SPREG_2;
        this.core.interrupts.writeSPReg2(off_, val, pc, isDelaySlot);
      };
      this.writeDpc8 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_DPC;
        this.core.interrupts.writeDPC(off_, val, pc, isDelaySlot);
      };
      this.writeDpc16 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_DPC;
        this.core.interrupts.writeDPC(off_, val, pc, isDelaySlot);
      };
      this.writeDpc32 = (val, a, pc, isDelaySlot) => {
        const off_ = a - MEMORY_START_DPC;
        this.core.interrupts.writeDPC(off_, val, pc, isDelaySlot);
      };
      this.writeDps8 = (val, a) => {
        const off_ = a - MEMORY_START_DPS;
        this.dpsUint8Array[off_ ^ 3] = val;
      };
      this.writeDps16 = (val, a) => {
        const off_ = a - MEMORY_START_DPS;
        this.dpsUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeDps32 = (val, a) => {
        const off_ = a - MEMORY_START_DPS;
        this.dpsUint32Array[off_ >>> 2] = val;
      };
      this.writeC2A1_8 = (val, a) => {
        const off_ = a - MEMORY_START_C2A1;
        this.c2a1Uint8Array[off_ ^ 3] = val;
      };
      this.writeC2A1_16 = (val, a) => {
        const off_ = a - MEMORY_START_C2A1;
        this.c2a1Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeC2A1_32 = (val, a) => {
        const off_ = a - MEMORY_START_C2A1;
        this.c2a1Uint32Array[off_ >>> 2] = val;
      };
      this.writeC1A1_8 = (val, a) => {
        const off_ = a - MEMORY_START_C1A1;
        this.c1a1Uint8Array[off_ ^ 3] = val;
      };
      this.writeC1A1_16 = (val, a) => {
        const off_ = a - MEMORY_START_C1A1;
        this.c1a1Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeC1A1_32 = (val, a) => {
        const off_ = a - MEMORY_START_C1A1;
        this.c1a1Uint32Array[off_ >>> 2] = val;
      };
      this.writeC2A2_8 = (val, a) => {
        const off_ = a - MEMORY_START_C2A2;
        this.c2a2Uint8Array[off_ ^ 3] = val;
      };
      this.writeC2A2_16 = (val, a) => {
        const off_ = a - MEMORY_START_C2A2;
        this.c2a2Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeC2A2_32 = (val, a) => {
        const off_ = a - MEMORY_START_C2A2;
        this.c2a2Uint32Array[off_ >>> 2] = val;
      };
      this.writeRom8 = (val, a) => {
        alert("attempt to overwrite rom!");
      };
      // `const off_ = a - MEMORY_START_ROM_IMAGE`
      // @romUint8Array[off_^3] = val
      this.writeRom16 = (val, a) => {
        alert("attempt to overwrite rom!");
      };
      // `const off_ = a - MEMORY_START_ROM_IMAGE`
      // @romUint16Array[off_>>>1^1] = val
      this.writeRom32 = (val, a) => {
        alert("attempt to overwrite rom!");
      };
      // `const off_ = a - MEMORY_START_ROM_IMAGE`
      // @romUint32Array[off_>>>2] = val
      this.writeC1A3_8 = (val, a) => {
        const off_ = a - MEMORY_START_C1A3;
        this.c1a3Uint8Array[off_ ^ 3] = val;
      };
      this.writeC1A3_16 = (val, a) => {
        const off_ = a - MEMORY_START_C1A3;
        this.c1a3Uint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeC1A3_32 = (val, a) => {
        const off_ = a - MEMORY_START_C1A3;
        this.c1a3Uint32Array[off_ >>> 2] = val;
      };
      this.writePif8 = (val, a) => {
        const off_ = a - MEMORY_START_PIF;
        this.pifUint8Array[off_ ^ 3] = val;
      };
      this.writePif16 = (val, a) => {
        const off_ = a - MEMORY_START_PIF;
        this.pifUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writePif32 = (val, a) => {
        const off_ = a - MEMORY_START_PIF;
        this.pifUint32Array[off_ >>> 2] = val;
      };
      this.writeGio8 = (val, a) => {
        const off_ = a - MEMORY_START_GIO;
        this.gioUint8Array[off_ ^ 3] = val;
      };
      this.writeGio16 = (val, a) => {
        const off_ = a - MEMORY_START_GIO;
        this.gioUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeGio32 = (val, a) => {
        const off_ = a - MEMORY_START_GIO;
        this.gioUint32Array[off_ >>> 2] = val;
      };
      this.writeDummy8 = (val, a) => {
        //log "writing to invalid memory at " + dec2hex(a)
        const off_ = a & 0x0000fffc;
        this.dummyReadWriteUint8Array[off_ ^ 3] = val;
      };
      this.writeDummy16 = (val, a) => {
        const off_ = a & 0x0000fffc;
        this.dummyReadWriteUint16Array[off_ >>> 1 ^ 1] = val;
      };
      this.writeDummy32 = (val, a) => {
        const off_ = a & 0x0000fffc;
        this.dummyReadWriteUint32Array[off_ >>> 2] = val; //constructor
      };
      return;
    }

    
      //getInt32 and getUint32 are identical. they both return signed.
    getInt32(uregion, off_, u32region) {
      return u32region[off_ >>> 2];
    }

    getUint32(uregion, off_) {
      return uregion[off_ + 3] << 24 | uregion[off_ + 2] << 16 | uregion[off_ + 1] << 8 | uregion[off_];
    }

    setInt32(uregion, off_, val, u32region) {
      u32region[off_ >>> 2] = val;
    }

    setUint32(uregion, off_, val) {
      uregion[off_ + 3] = val >> 24;
      uregion[off_ + 2] = val >> 16;
      uregion[off_ + 1] = val >> 8;
      uregion[off_] = val;
    }

  };

  //hack global space until we export classes properly
  //node.js uses exports; browser uses this (window)
  root = typeof exports !== "undefined" && exports !== null ? exports : self;

  root.C1964jsMemoryLE = C1964jsMemoryLE;

}).call(this);
