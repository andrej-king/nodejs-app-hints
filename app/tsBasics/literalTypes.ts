// @ts-ignore
const a = 'asdasda'

// special literal type
// @ts-ignore
let b: 'hi' = 'hi'

//region Литеральные типы
// @ts-ignore
type direction = 'left' | 'right'

function moveDog(direction: direction): -1 | 0 | 1 {
  switch (direction) {
    case "left":
      return -1
    case "right":
      return 1
    default:
      return 0
  }
}

// Только доступные значения в 'direction' type
moveDog('left')
//endregion

//region Интерфейс или строка
interface IConnection {
  host: string
  port: number
}

function connect(connection: IConnection | 'default') {

}

// Доступные параметры
connect({host: '123', port: 111})
connect('default')
//endregion

const connection2 = {
  host: 'localhost',
  protocol: 'https' as 'https'
}

//region Приведение типов
// @ts-ignore
let c: any = 5

// лучше использовать первый вариант
// @ts-ignore
let d = c as number // записи идентичны (приведение к типу)
// @ts-ignore
let e = <number>c   // записи идентичны (приведение к типу)
//endregion

function connect2(host: string, protocol: 'http' | 'https') {

}

connect2(connection2.host, connection2.protocol)
