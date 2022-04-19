let arr = process.argv;
arr.shift();
arr.shift();
new Processor().start(arr);