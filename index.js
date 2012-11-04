/**
 * Module exports
 */
module.exports = throttle
module.exports.debounce = debounce

/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
 *
 * @param {Number} func target function to invoke.
 * @param {Number} wait milliseconds to wait before allowing another invokation.
 * @return {Function} Throttled function.
 * @api public
 */
function throttle(wait, func) {
  var context, args, timeout, throttling, more, result;
  var whenDone = debounce(wait, function(){ more = throttling = false; });
  return function() {
    context = this; args = arguments;
    var later = function() {
      timeout = null;
      if (more) {
        result = func.apply(context, args);
      }
      whenDone();
    };
    if (!timeout) timeout = setTimeout(later, wait);
    if (throttling) {
      more = true;
    } else {
      throttling = true;
      result = func.apply(context, args);
    }
    whenDone();
    return result;
  };
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for `wait` milliseconds.
 *
 * @param {Number} func target function to invoke.
 * @param {Number} wait milliseconds to wait before allowing another invokation.
 * @param {Boolean} immediate trigger the function on the leading edge, instead of the trailing.
 * @return {Function} Throttled function.
 * @api public
 */
function debounce(wait, func, immediate) {
  var timeout, result;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(context, args);
    return result;
  };
};
