/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace ExpressivePixels {
    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the colorbit is connected.
     * @param numleds number of leds in the strip, eg: 25
     */
    //% blockId="ExpressivePixels_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8
    //% parts="ExpressivePixels"
    //% trackArgs=0,2
    //% blockSetVariable=leddisplay
    //% advanced=true
    export function create(strip: string , buf: Buffer)
        
    }


        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="ExpressivePixels_clear" block="%leddisplay|clear"
        //% weight=76
        //% parts="ExpressivePixels"
        clear(): void {
        }


}