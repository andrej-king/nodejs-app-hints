import http from 'http'

const host = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end('Hello world')
})


server.listen(port, host, () => {
  console.log(`Server running on ${port} port.`)
})
