//region Basic types
let a: number = 5
let b: string = 'abc'
let c: string = '4'
let d = true

let e: number = a + Number(b)

let names: string[] = ['a', 'b', 'c']
let ages: number[] = [20, 25, 18]

let tup: [number, string] = [2, 'dasda']

// not use
let f: any = 3
f = ''
f = true

let anyArr: any[] = ['fsds', 3, true]

// function
function greet(name: string): string {
  return name + 'Hi'
}

// anonymous function
names.map((x: string) => x)

function coordinates(coord: { lat: number, long?: number }) {

}

//endregion

//region Union types
let universalId: number | string = 5
universalId = 'sdsds'

function printId(id: number | string) {
  if (typeof id === 'string') {
    // work with string value
    console.log(id.toUpperCase())
  } else {
    // work with number value
    console.log(id)
  }
}

function helloUser(user: string | string[]) {
  if (Array.isArray(user)) {
    // work with array
    console.log(user.join(', ') + 'Hi')
  } else {
    // work with string value
    console.log(user + 'Hi')
  }
}

//endregion

//region Interfaces and Types
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


//endregion
