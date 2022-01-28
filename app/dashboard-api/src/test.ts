//region basic types
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

//region union types
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
