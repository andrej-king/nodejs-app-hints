// first timer example
// const start = performance.now()
// setTimeout(() => {
//   console.log(performance.now() - start)
//   console.log('Прошла секунду')
// }, 1000)

// ===========================

// second timer example
// function myFunc(arg) {
//   console.log(`Аргумент => ${arg}`)
// }

// setTimeout(myFunc, 1500, 'Some argument') // arg put as param in func

// ===========================

// third timer example
// const timerId = setTimeout(() => {
//   console.log('Отмена таймера')
// }, 5000)

// очистка таймера по id
// setTimeout(() => {
//   clearTimeout(timerId)
//   console.log('Очищено')
// }, 1000)

// ===========================

// fourth timer
// const start = performance.now()
// const intervalId = setInterval(() => {
//   console.log(performance.now() - start)
//   console.log('Отмена таймера')
// }, 5000)
//
// setInterval(() => {
//   clearInterval(intervalId)
//   console.log('Интервал очищен')
// }, 1000)

// ===========================
// example with setImmediate
// console.log('Перед')
//
// setImmediate(() => {
//   console.log('Выполнено после всего')
// })
//
// console.log('После')

// ===========================
// Unref timer link
const timerId = setTimeout(() => {
  console.log('Удаление ссылки на таймер')
}, 5000)

// remove link to timer
timerId.unref()

setImmediate(() => {
  // will return link to timer
  timerId.ref()
})

