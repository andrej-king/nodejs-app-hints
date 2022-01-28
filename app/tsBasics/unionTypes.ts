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
