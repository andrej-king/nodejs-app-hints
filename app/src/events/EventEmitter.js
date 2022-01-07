const EventEmitter = require('events') // prefer use if need work with events.
const myEmitter = new EventEmitter()

// can be error handler
myEmitter.on('error', (err) => {
  console.log(`Error happened: ${err.message}`)
})
myEmitter.emit('error', new Error('Some error happened'))

const logDbConnection = () => {
  console.log('DB connected')
}

// add listener by event name
myEmitter.addListener('connected', logDbConnection)

// call event
myEmitter.emit('connected')

// remove listener
myEmitter.off('connected', logDbConnection)
myEmitter.emit('connected') // not working

// second way to register event
myEmitter.on('msg', (data) => {
  console.log(`Get: ${data}`)
})

// prepend event
myEmitter.prependListener('msg', () => {
  console.log('Prepend')
})

myEmitter.emit('msg', 'Hello')

// add listener, call only once time
myEmitter.once('off', () => {
  console.log('Call only once time')
})

myEmitter.emit('off')
myEmitter.emit('off') // not working
