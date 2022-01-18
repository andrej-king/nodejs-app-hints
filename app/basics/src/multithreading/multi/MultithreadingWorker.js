// multithreading
const { Worker } = require('worker_threads')
const workerFileName = __dirname + '/worker.js'
console.log(workerFileName)

const compute = (array) => {
  console.log()
  return new Promise((resolve, reject) => {
    const worker = new Worker('/worker.js', { // Cannot find module '/app/worker.js'
      workerData: {
        array
      }
    })

    worker.on('message', (msg) => {
      console.log(worker.threadId)
      resolve(msg)
    })

    worker.on('error', (err) => {
      reject(err)
    })

    worker.on('exit', () => {
      console.log('Завершил работу')
    })
  })
}

const main = async () => {
  try {
    performance.mark('start')

    const result = await Promise.all([
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
      compute([25, 20, 50, 30, 100]),
    ])

    console.log(result)

    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main').pop())
  } catch (err) {
    console.log(err.message)
  }
}

setTimeout(() => {
  console.log('Timeout')
}, 200)

main()
