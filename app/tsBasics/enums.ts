// @ts-ignore
type direction = 'left' | 'right'

//region enum, простая запись
enum Direction {
  Left,
  Right
  // Left= 'left',
  // Right = 1
}

console.log(Direction.Left)

function move(direction: Direction) {
  switch (direction) {
    case Direction.Left:
      return -1
    case Direction.Right:
      return 1
    default:
      return 0
  }
}

//endregion

//region enum могут быть переданы как объекты
function objMod(obj: { Left: number }) {

}

objMod(Direction)
//endregion

//region enum в виде константы
const enum Direction2 {
  Up,
  Down
}

let myDirection = Direction2.Up
//endregion
