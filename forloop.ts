//% category="Loops"
namespace loops {
  /**
   * Run part of the program the number of times you say using an index variable.
   * The 'index' takes on the values from start to the end number, counting by 1, and run the specified blocks.
   * @param start start value, eg: 0
   * @param end end value, eg: 5
   */
  //% blockId=makerbit_for_loop
  //% handlerStatement=1
  //% draggableParameters
  //% block="for $index | from $start | to $end"
  //% block.loc.de="für $index | von $start | bis $end | mache"
  //% jsdoc.loc.de="Führt Code so oft aus wie in der Indexvariablen angegeben. Dabei verwendet Index die Werte von start bis end"
  //% weight=65
  export function forLoop(
    start: number,
    end: number,
    actionToBeRepeated: (index: number) => void
  ) {
    if (start <= end) {
      for (let index = start; index <= end; index++) {
        actionToBeRepeated(index);
      }
    } else {
      for (let index = start; index >= end; index--) {
        actionToBeRepeated(index);
      }
    }
  }
}
