const {fork} = require('child_process')

const forkProcess = fork(__dirname + '/fork.js')

forkProcess.on('message', (msg) => {
  console.log(`Получено сообщение: ${msg}`)
})

forkProcess.on('close', (code) => {
  console.log(`Exit code: ${code}`)
})

forkProcess.send('Ping')
forkProcess.send('disconnect')
