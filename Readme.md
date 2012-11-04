# throttle

  Restrict how frequently a function may be invoked.

## Installation

    $ component install timoxley/throttle

## Example

```js
  var throttle = require('throttle')
  window.addEventListener('scroll', throttle(1000, function() {
    console.log('I should only happen once every second.')
  }))
  window.addEventListener('scroll', throttle(2000, function() {
    console.log('I should only happen once every two seconds.')
  }))
```

## API

### throttle(wait, fn)
Returns a new function that wraps the supplied `fn`, blocking calls to `fn` until `wait` milliseconds have elapsed.

## License

  MIT
