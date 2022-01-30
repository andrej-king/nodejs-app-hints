//region Простой класс
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

//region
interface LoggerInterface {
  log: (s: string) => void
}

class Logger implements LoggerInterface {
  log(s: string): void {
    console.log(s)
  }
}
//endregion
