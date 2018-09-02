// debounceTime
// If no events are emitted for 3sec then the last emitted event is sent
// down the stream. And if emitted, then the previous one is discarded
// and the new one is buffered and send downstream if no event is emitted
// in 3secs

Rx.Observable.interval(100)
    .take(10)
    .do(int => console.log(int))
    .debounceTime(3000)
    .subscribe({
      next: event => console.log(`From Observer :${event}`),
      error: err => console.log(`err`),
      complete: () => console.log(`Complete!`)
});

// throttleTime, emits every certain milliseconds

Rx.Observable.interval(100)
    .take(10)
    .do(int => console.log(int))
    .throttleTime(300)
    .subscribe({
      next: event => console.log(`From Observer :${event}`),
      error: err => console.log(`err`),
      complete: () => console.log(`Complete!`)
});