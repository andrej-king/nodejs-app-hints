type coord = { lat: number, long: number }

interface ICoord {
  lat: number
  long: number
}

type UniqueId = number | string
type myString = string

function computWithTypeParam(coord: coord) {
}

function computWithInterfaceParam(coord: ICoord) {
}

//region Extend interface
interface IAnimal {
  name: string
}

interface IDog extends IAnimal {
  tail?: boolean
}

const dogFromInterface: IDog = {
  name: 'dsa'
}
//endregion

//region Extend type
type AnimalType = {
  name: string
}

type DogType = AnimalType & {
  tail: boolean
}

const dogFromType: DogType = {
  name: 'some name',
  tail: true
}
//endregion

//region Merge interface fields
interface IDogMerge {
  name: string
}

interface IDogMerge {
  tail: boolean
}

// IDogMerge have both fields
const dogMerge: IDogMerge = {
  name: 'sdsds',
  tail: true
}
//endregion
