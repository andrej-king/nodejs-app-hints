const fs = require('fs')

// step 1
console.log('Start')

// step 10
setTimeout(() => {
  console.log(performance.now(), 'Timer 100')
}, 100)

// step 8
setImmediate(() => {
  console.log('Immediate')
})

// step 9
fs.readFile(__filename, () => {
  console.log('File read')
})

// step 3
setTimeout(() => {
  for (let i = 0; i < 10000000; i++) {
    // do something
  }
  // step 5
  console.log('Done')

  // step 7
  Promise.resolve().then(() => {
    console.log('Promise inside timeout')
  })

  // step 6
  process.nextTick(() => {
    console.log('tick inside timeout')
  })
}, 0)

// step 4
Promise.resolve().then(() => {
  console.log('Promise')
})

// step 3
process.nextTick(() => {
  console.log('tick')
})

// step 2
console.log('Final')
