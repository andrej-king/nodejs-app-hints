# Hints for Applications Using Node JS

## Dev

* `make init` Run app.
* `make lint` Run app linters.
* `make lint-fix` Run app linters with 'fix' mode.

### Events
* `EventEmitter` from default node module `events`. Preferable to use for work with events.

### Фазы NodeJS
* <span style="color:green">Инициализация</span>
* nextTick, microtaskQueue
* <span style="color:darkmagenta">таймеры</span>
* nextTick, microtaskQueue
* <span style="color:darkmagenta">pending, callbacks</span>
* nextTick, microtaskQueue
* <span style="color:darkmagenta">idle, prepare</span>
* nextTick, microtaskQueue
* <span style="color:darkmagenta">poll</span>
* nextTick, microtaskQueue
* <span style="color:darkmagenta">check</span> 
* nextTick, microtaskQueue
* <span style="color:darkmagenta">close callback</span>
* <span style="color:green">Проверка на окончание</span>
