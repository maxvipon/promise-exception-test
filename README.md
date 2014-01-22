# Promise Exception Test

```bash
$ npm install
# Test Vow
$ node vow-exception.js
# no exception

$ node vow-exception-catch.js
TypeError: Object #<Object> has no method 'map'
    at /Users/maxpon/vow-exception-catch.js:8:17
    at Array.0 (/Users/maxpon/node_modules/vow/lib/vow.js:555:56)
    at Object.callFns [as _onImmediate] (/Users/maxpon/node_modules/vow/lib/vow.js:1131:35)
    at processImmediate [as _immediateCallback] (timers.js:330:15)

# Test Bluebird
$ node bluebird-exception.js
TypeError: Object [object PromiseResolver] has no method 'map'
    at /Users/maxpon/bluebird-exception.js:8:17
    at tryCatch1 (/Users/maxpon/node_modules/bluebird/js/main/util.js:85:19)
    at Promise$_callHandler [as _callHandler] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:679:13)
    at Promise$_settlePromiseFromHandler [as _settlePromiseFromHandler] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:695:18)
    at Promise$_settlePromiseAt [as _settlePromiseAt] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:877:14)
    at Promise$_fulfillPromises [as _fulfillPromises] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:978:14)
    at Async$_consumeFunctionBuffer [as _consumeFunctionBuffer] (/Users/maxpon/node_modules/bluebird/js/main/async.js:63:12)
    at Async$consumeFunctionBuffer (/Users/maxpon/node_modules/bluebird/js/main/async.js:36:14)
    at process._tickCallback (node.js:415:13)
    at Function.Module.runMain (module.js:499:11)

$ node bluebird-exception-catch.js
TypeError: Object [object PromiseResolver] has no method 'map'
    at /Users/maxpon/bluebird-exception-catch.js:8:17
    at tryCatch1 (/Users/maxpon/node_modules/bluebird/js/main/util.js:85:19)
    at Promise$_callHandler [as _callHandler] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:679:13)
    at Promise$_settlePromiseFromHandler [as _settlePromiseFromHandler] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:695:18)
    at Promise$_settlePromiseAt [as _settlePromiseAt] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:877:14)
    at Promise$_fulfillPromises [as _fulfillPromises] (/Users/maxpon/node_modules/bluebird/js/main/promise.js:978:14)
    at Async$_consumeFunctionBuffer [as _consumeFunctionBuffer] (/Users/maxpon/node_modules/bluebird/js/main/async.js:63:12)
    at Async$consumeFunctionBuffer (/Users/maxpon/node_modules/bluebird/js/main/async.js:36:14)
    at process._tickCallback (node.js:415:13)
    at Function.Module.runMain (module.js:499:11)
```
