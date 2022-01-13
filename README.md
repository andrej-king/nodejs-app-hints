# Hints for Applications Using Node JS

## Dev

* `make init` Run app.
* `make lint` Run app linters.
* `make lint-fix` Run app linters with 'fix' mode.

### [Events][Events]
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

## Измерение производительности ([perf_hooks][perf_hooks])
* Использование класса `PerformanceObserver` из `perf_hooks` модуля.
* `performance.mark('markName')` Поставить отметку времени.
* `performance.measure('slow', 'start', 'end')` Посчитать разницу во времени между отметками.
* `performance.{getEntries()` | `getEntriesByName(...)` | `getEntriesByType(...)`} Вернуть результат измерений.
* `perf_hooks.performance.timerify(functionName)` Измерение времени выполнения всей функции.

## Многопоточность ([worker_threads][worker_threads] and [Worker Pool][WorkerPool])
* По-умолчания 4 (По количеству ядер процессора)
* Можно увеличить количество до 1024
* `process.env.UV_THREADPOOL_SIZE=8` Установить количество Worker Threads, которые будут работать паралельно.

## Запуск отдельных процессов ([child_process][child_process])
* [exec][child_process_exec] из `child_process` модуля. Запуск системного процесса (например `ls` для просмотра содержимого каталога).
* [spawn][child_process_spawn] из `child_process` модуля. Запуск системного процесса (например `ls` для просмотра содержимого каталога).
* [fork][child_process_fork] из `child_process` модуля. Обмен сообщениями между потоками.

[Red]: https://via.placeholder.com/10/f03c15/000000?text=+
[Green]: https://via.placeholder.com/10/adff2f/000000?text=+
[DarkMagenta]: https://via.placeholder.com/10/8B008B/000000?text=+

[Events]: https://nodejs.org/api/events.html
[EventLoop]: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
[WorkerPool]: https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
[perf_hooks]: https://nodejs.org/api/perf_hooks.html
[worker_threads]: https://nodejs.org/api/worker_threads.html#workerworkerdata
[child_process]: https://nodejs.org/api/child_process.html
[child_process_exec]: https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
[child_process_spawn]: https://nodejs.org/api/child_process.html#spawning-bat-and-cmd-files-on-windows
[child_process_fork]: https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options
