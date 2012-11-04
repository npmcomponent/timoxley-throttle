/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
 *
 * @param {Number} wait milliseconds to wait before allowing another invokation.
 * @param {Number} fn target function to invoke.
 * @return {Function} Throttled function.
 * @api public
 */
module.exports = (function() {
  return function throttle(wait, fn) {
    var blocked, timeout
    return function() {
      if (blocked) {
        return
      }
      blocked = true
      timeout = setTimeout(function() {
        blocked = false
      }, wait)
      return fn.apply(this, arguments)
    }
  }
})()
