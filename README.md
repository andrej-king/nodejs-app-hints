# Hints for Applications Using Node JS

## Dev

* `make init` Run app.
* `make lint` Run app linters.
* `make lint-fix` Run app linters with 'fix' mode.

### Events
* `EventEmitter` Из стандартного модуля `events`, предпочтительнее для работы с `events`.

## Фазы NodeJS [(Event Loop)][EventLoop]
* ![Red] Инициализация
* nextTick, microtaskQueue
* ![DarkMagenta]  таймеры
* nextTick, microtaskQueue
* ![DarkMagenta]  pending, callbacks
* nextTick, microtaskQueue
* ![DarkMagenta]  idle, prepare
* nextTick, microtaskQueue
* ![DarkMagenta]  poll
* nextTick, microtaskQueue
* ![DarkMagenta]  check 
* nextTick, microtaskQueue
* ![DarkMagenta] close callback
* nextTick, microtaskQueue
* ![Red] Проверка на окончание

## Call Stack
`First in Last out`

## [Worker Threads][WorkerThreads]
* По-умолчания 4 (По количеству ядер процессора)
* Можно увеличить количество до 1024
* `process.env.UV_THREADPOOL_SIZE=8` Установить количество Worker Threads, которые будут работать паралельно.

## Измерение производительности (performance measurement)
* Использование класса `PerformanceObserver` из `perf_hooks` модуля.
* `performance.mark('markName')` Поставить отметку времени.
* `performance.measure('slow', 'start', 'end')` Посчитать разницу во времени между отметками.
* `performance.{getEntries()` | `getEntriesByName(...)` | `getEntriesByType(...)`} Вернуть результат измерений.
* `perf_hooks.performance.timerify(functionName)` Измерение времени выполнения всей функции.

[Red]: https://via.placeholder.com/10/f03c15/000000?text=+
[Green]: https://via.placeholder.com/10/adff2f/000000?text=+
[DarkMagenta]: https://via.placeholder.com/10/8B008B/000000?text=+

[EventLoop]: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
[WorkerThreads]: https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
