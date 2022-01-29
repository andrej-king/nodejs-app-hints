//region Простой generics с 1 типом
function log<T>(obj: T): T {
  console.log(obj)
  return obj
}

log<string>('dfdsfs')
log<number>(1234)
//endregion

//region Generic с 2-мя типами
function log2<T, K>(obj: T, arr: K[]): K[] {
  arr.length
  console.log(obj)
  return arr
}

log2<string, number>('gfdgd', [1, 2, 3])
//endregion

//region generic с ограниченным количеством типов
interface IHasLength {
  length: number
}

function log3<T extends IHasLength, K>(obj: T, arr: K[]): K[] {
  obj.length
  console.log(obj)
  return arr
}

// log3<number, string>(1, ['sdasda', 'dasdas']) // ошибка: у типа 'number' нету свойства 'length'
log3<string, number>('jgffg', [1, 2, 3]) // ошибка: у типа 'number' нету свойства 'length'
//endregion

//region Описывание функций в интерфейсе
interface IUser {
  name: string
  age?: number
  bid: (sum: number) => boolean // ставка
  bid2: <T>(sum: T) => boolean
}

function bid(sum: number): boolean {
  return true
}

function bid2<T>(sum: T): boolean {
  return true
}
//endregion
