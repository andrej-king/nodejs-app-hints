//region Тип переменной в зависимости от типу другой переменной
// @ts-ignore
let a = 'Привет'

if (typeof a === 'string') {
  // do something
}

// @ts-ignore
let b: typeof a
//endregion

//region Тип как ключ объекта
// @ts-ignore
type Coordinates = {
  lat: number
  long: number
}

type P = keyof Coordinates

let p1: P = 'lat'
let p2: P = 'long'
//endregion

//region Проверка на null
function log(a: string | null): void {
  a?.toLowerCase()
}
//endregion


//region Другие типы
const bigIntValue: bigint = BigInt(100)
const symbolValue: symbol = Symbol('sdasdas')
//endregion
