let counter = 0; // Declare the counter variable

function job1(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback();
    }, 4000);
}

function done() {
    console.log("done", counter);
}

job1(function(data) {
    counter += 1;
    if (counter === 2) {
        done();
    }
});

job2(function(data) {
    counter += 1;
    if (counter === 2) {
        done();
    }
});
