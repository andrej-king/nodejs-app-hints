//region Простой класс
// @ts-ignore
class Coordinates {
  lat: number
  long: number

  computeDistance(newLat: number, newLong: number): number {
    return 0
  }

  constructor(lat: number, long: number) {
    this.lat = lat
    this.long = long
  }
}

const point = new Coordinates(10, 20)
//endregion

//region Расширение класса, getter и setter
class MapLocation extends Coordinates {
  private _name: string

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  override computeDistance(newLat: number, newLong: number): number {
    return 1
  }

  constructor(lat: number, long: number, name: string) {
    super(lat, long);
    this._name = name
  }
}

const mapLocation = new MapLocation(0, 100, 'example')
//endregion

//region Классы и интерфейсы
interface LoggerInterface {
  log: (s: string) => void
}

class Logger implements LoggerInterface {
  log(s: string): void {
    console.log(s)
  }
}

//endregion

//region Классы и generics
class MyClass<T> {
  a: T
}

const myClass = new MyClass<string>()
console.log(myClass.a)
//endregion

//region Абстрактные классы
abstract class Base {
  print(s: string) {
    console.log(s)
  }

  abstract error(s: string): void
}

class BaseExtended extends Base {
  error(s: string): void {
    // some details
  }
}

new BaseExtended().print('text')
//endregion
