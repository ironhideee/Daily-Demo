  const promise = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
  });
  promise
    .then(function(value) { console.log(value) })
    .catch(function(error) { console.log(error) });
  // ok

  const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
  });
  promise.then(function (value) { console.log(value) });
  // ok
  // Uncaught Error: test