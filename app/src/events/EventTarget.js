const target = new EventTarget()

const logTarget = () => {
  console.log('Connected to target.')
}

// register listener
target.addEventListener('connected', logTarget)

// call event
target.dispatchEvent(new Event('connected'))
