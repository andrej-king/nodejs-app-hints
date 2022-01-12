const { spawn } = require('child_process')

const childProcess = spawn('ls')

childProcess.stdout.on('data', (data) => {
  console.log(`StdOut: ${data}`)
})

childProcess.stderr.on('data', (data) => {
  console.log(`StdOut: ${data}`)
})

childProcess.on('exit', (code) => {
  console.log(`Exit code: ${code}`)
})
