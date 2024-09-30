let fs = require('fs');

function callback2(err) {
  if (err) {
    console.log("Something went wrong");
  } else {
    console.log('File written successfully');
  }
}

function callback(err, data) {
  console.log(data);
  fs.writeFile("temp.java", "hello", callback2);
}

fs.readFile("temp.java", "utf-8", callback);
console.log("Hello");