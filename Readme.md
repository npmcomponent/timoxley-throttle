*This repository is a mirror of the [component](http://component.io) module [timoxley/throttle](http://github.com/timoxley/throttle). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/timoxley-throttle`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# throttle

  Restrict how frequently a function may be invoked.

  Note:

  The original implemenation comes from underscore, except just to be a pain, *I've flipped
  the argument order so the function always comes last*. This is to prevent
  hard to read, dangling arguments when using anonymous functions or
  long function invocations, such as when using `bind`.

  Plans: Dump confusing underscore implementation + implement fluent interface.
  Interface very likely to change.

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

### throttle.debounce(wait, immediate, fn)
Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for `wait` milliseconds.

## License

  MIT
