# Hints for Applications Using Node JS

## Basics
* `make init` Run app.
* `make lint` Run app linters.
* `make lint-fix` Run app linters with 'fix' mode.

## Tools
* [ClinicJS Doctor][clinicjs_doctor] Диагностика проблем с производительностью в приложениях Node.js
* [Autocannon][autocannon] Имитация нагрузки

## TypeScript libs
* [tsc][tsc] Компилятор `ts` в `js`
* [inversify][inversify] Dependency Injection
* [reflect-metadata][reflect-metadata]
* [tslog][tslog] Логгер
* [ts-node][ts-node] Обработчик ts, для перезапуска приложения без компиляции (используется вместе с `nodemon`)
* [prisma][prisma] ORM для работы с бд

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

## Измерение производительности ([perf_hooks][perf_hooks])
* Использование класса `PerformanceObserver` из `perf_hooks` модуля.
* `performance.mark('markName')` Поставить отметку времени.
* `performance.measure('slow', 'start', 'end')` Посчитать разницу во времени между отметками.
* `performance.{getEntries()` | `getEntriesByName(...)` | `getEntriesByType(...)`} Вернуть результат измерений.
* `perf_hooks.performance.timerify(functionName)` Измерение времени выполнения всей функции.

## Многопоточность ([Worker Threads][WorkerThreads] and [Worker Pool][WorkerPool])
* `worker_threads` модуль.
* Отдельный поток в том же Node процессе.
* По-умолчания 4 (По количеству ядер процессора)
* Можно увеличить количество до 1024
* `process.env.UV_THREADPOOL_SIZE=8` Установить количество Worker Threads, которые будут работать паралельно.

## Запуск отдельных процессов ([child_process][child_process])
* [exec][child_process_exec] из `child_process` модуля. Запуск системного процесса (например `ls` для просмотра содержимого каталога).
* [spawn][child_process_spawn] из `child_process` модуля. Запуск системного процесса (например `ls` для просмотра содержимого каталога).
* [fork][child_process_fork] из `child_process` модуля.(Создаёт отдельный instance NodeJS) Обмен сообщениями между потоками.

## Сравнение произодительности используя Worker и Fork
* Время выполнения при передаче небольших данных примерно одинаковое.
* Время выполнения при передаче больших данных (file ~ 100 mb), Worker(1.198 сек) vs Fork(27.815 сек).
* Лучше использовать Worker.

## Посмотреть bytecode программы
* Запустить node с параметром: `node --print-bytecode src/app.js`
* Или добавить параметр в `package.json` скрипт: `"start": "node --print-bytecode src/app.js",`

## Посмотреть состояние программы после очистки Garbage Collector
* Запустить node с параметрами: `node --expose-gc --trace_gc_verbose src/app.js`
* Или добавить параметр в `package.json` скрипт: `"start": "node --expose-gc --trace_gc_verbose src/app.js",`

## [CLI аргументы][cli_args]
* `process.argv` Получить CLI агрументы

## [OS][os]

## [Path][path]

## Weather CLI
* `make weather-cli` Run app.
* `make app-weather-cli-lint` Run app linters.
* `make app-weather-cli-lint-fix` Run app linters with 'fix' mode.
* Войти в docker image
  * `cd src`
  * `node app.js -h`
  * `node app.js -t [openweathermap token]`
  * `node app.js -s [CITY]`
* или:
  * `npm start -- -t [OPENWEATHER TOKEN]`
  * `npm start -- -s [CITY]`
  * `npm start` выведет погоду в городе сохранённом ранее.
  * Параметры могут быть сохранены `package.json` файле.

## Dashboard API
* `make dashboard-api` Run app.
* `make app-dashboard-api-lint` Run app linters.
* `make app-dashboard-api-lint-fix` Run app linters with 'fix' mode.
* `make app-dashboard-api-build` Typescript компилятор (компилирует ts в папку ./dist)
* `app-dashboard-api-performance` Посмотреть производительность приложения (Сгенерированные html графики складываются в папку `.clinic`) (в docker должен быть установлен `clinic` и `autocannon`)

## [Typescript][Typescript]
* [Tutorial][TypescriptTutorial]
* `npm i -g typescript` Глобальная установка typescript компилятора.
* `tsc` Компилятор (компилирует `ts` в `js` по правилам указанным в `tsconfig.json` файле.
* `tcs --init` сгенерировать `tsconfig.json` файл для конфигурации компилятора.

[Red]: https://via.placeholder.com/10/f03c15/000000?text=+
[Green]: https://via.placeholder.com/10/adff2f/000000?text=+
[DarkMagenta]: https://via.placeholder.com/10/8B008B/000000?text=+

[Events]: https://nodejs.org/api/events.html
[EventLoop]: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
[WorkerPool]: https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
[perf_hooks]: https://nodejs.org/api/perf_hooks.html
[WorkerThreads]: https://nodejs.org/api/worker_threads.html#workerworkerdata
[child_process]: https://nodejs.org/api/child_process.html
[child_process_exec]: https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
[child_process_spawn]: https://nodejs.org/api/child_process.html#spawning-bat-and-cmd-files-on-windows
[child_process_fork]: https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options
[cli_args]: https://nodejs.org/docs/latest/api/process.html#processargv
[os]: https://nodejs.org/docs/latest/api/os.html
[path]: https://nodejs.org/docs/latest/api/path.html
[Typescript]: https://www.typescriptlang.org/
[TypescriptTutorial]: https://www.typescripttutorial.net/

[tsc]: https://www.npmjs.com/package/typescript
[inversify]: https://github.com/inversify/InversifyJS
[reflect-metadata]: https://github.com/rbuckton/reflect-metadata
[tslog]: https://tslog.js.org/
[ts-node]: https://www.npmjs.com/package/ts-node
[prisma]: https://www.prisma.io/

[clinicjs_doctor]: https://clinicjs.org/doctor/
[autocannon]: https://github.com/mcollina/autocannon
