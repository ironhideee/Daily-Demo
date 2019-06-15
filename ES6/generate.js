function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  
var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }

//利用 Generator 函数和for...of循环，实现斐波那契数列
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  
  for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
  }
