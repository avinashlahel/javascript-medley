// debounceTime
Rx.Observable.interval(100)
    .take(10)
    .do(int => console.log(int))
    .debounceTime(3000)
    .subscribe({
      next: event => console.log(`From Observer :${event}`),
      error: err => console.log(`err`),
      complete: () => console.log(`Complete!`)
});