// MakerBit pinmapping and pin blocks for Calliope Mini

const enum MakerBitPin {
    A0 = 9,   //C16     A = Analog Pins
    A1 = 15,  //C17
    A2 = 7,   //P1
    A3 = 8,   //P2
    A4 = 0,   // not connected ! Lack of analog Pins at the calliope mini
    P5 = 8,   //used double! equal to A3 P = Digital Pins
    P6 = 21,  //C8
    P7 = 20,  //C7
    P8 = 10,  //C4
    P9 = 22,  //C9
    P10 = 16, //C10
    P11 = 14, //C11
    P12 = 13, //C12
    P13 = 11, //C5
    P14 = 17, //C6
    P15 = 19, //P0
    P16 = 23, //P3
    SCL = 24, //C19
    SDA = 25  //C18
}
let PinListe: number[] = []
PinListe = [9, 15, 7, 8, 0, 8, 21, 20, 10, 22, 16, 14, 13, 11, 17, 19, 23]

const enum PinLevel {
    //% block="high"
    High = 1,
    //% block="low"
    Low = 0
}

namespace makerbit {
    /**
     * Sets LED pins 5 to 16 to either on or off.
     * The pins 5 to 16 are MakerBit LED pins.
     * @param level digital pin level, either 0 or 1
     */
    //% blockId="makerbit_helper_set_led_pins"
    //% block="set all LED pins to %level=makerbit_helper_level"
    //% weight=90
    //% subcategory="Pins"
    export function setLedPins(level: number): void {
        for (let i = 5; i <= 16; i++) {
            setDigitalPin(PinListe[i], level);
        }
    }

    /**
     * Sets a digital pin to either on or off.
     * Configures this pin as a digital output (if necessary).
     * @param name name of the pin in the range from 0 to 20, eg: 5
     * @param level digital pin level, either 0 or 1
     */
    //% blockId="makerbit_helper_set_digital_pin"
    //% block="set digital pin %pin | to %level=makerbit_helper_level"
    //% name.min=0 name.max=17
    //% weight=89 subcategory="Pins"
    export function setDigitalPin(name: number, level: number): void {
        if (name < 0 || name > 17 || name == 4) {
            return;
        }
        pins.digitalWritePin(PinListe[name], level)
    }

    /**
     * Sets an analog pin to a given level.
     * Configures this pin as an analog/pwm output, and change the output value to the given level
     * with the duty cycle proportional to the provided value.
     * The value is a number between 0 (0% duty cycle) and 1023 (100% duty).
     * @param name name of the pin in the range from 0 to 20, eg: 0
     * @param level value in the range from 0 to 1023 eg: 1023
     */
    //% blockId="makerbit_helper_set_analog_pin"
    //% block="set analog pin %pin | to %level"
    //% name.min=0 name.max=3
    //% level.min=0 level.max=1023
    //% weight=88 subcategory="Pins"
    export function setAnalogPin(name: number, level: number): void {
        if (name < 0 || name > 17 || name == 4) {
            return;
        }
        pins.digitalWritePin(PinListe[name], level)
    }

    /**
     * Turns a digital pin level into a number.
     * @param level the pin level, eg: PinLevel.High
     */
    //% blockId=makerbit_helper_level
    //% block="%level"
    //% blockHidden=true subcategory="Pins"
    export function level(level: PinLevel): number {
        return level;
    }
} 