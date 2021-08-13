#!/bin/sh
export minified="1964js.min.js"
closure="lib/closure-compiler-v20180610"

echo Compiling files ...
java -jar $closure.jar --compilation_level SIMPLE_OPTIMIZATIONS --language_in=ES6_STRICT --js js/constants.js --js lib/BigInt-modded-forES6.js --js lib/closure/goog/base.js --js js/1964.js --js lib/mainLoop.js --js js/helpers.js --js js/opcodeMap.js --js js/boot.js --js lib/closure/goog/math/long.js --js js/pif.js --js js/pif_le.js --js js/keyboard.js --js js/memory.js --js js/memory_le.js --js js/gen.js --js js/audio.js --js js/dma.js --js js/dma_le.js --js js/interrupts.js --js lib/glMatrix-0.9.5.min.js --js lib/webgl-utils.js --js js/renderer.js --js js/renderer_le.js --js js/videoHLE.js --js js/gfxHelpers.js --js js/gfxHelpers_le.js --js js/webGL.js --js lib/bitjs/io.js --js lib/bitjs/archive-modded-to-point-to-minified.js --js js/ui.js --js_output_file $minified
echo done.