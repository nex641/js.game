args = process.stdin.on('data', data => {
    process.exit();
});
new Processor().start(args);