const fs = require("fs");

// create file

fs.writeFileSync("text.txt", "Helloooo!");

// read flie

fs.readFile("text.txt", "utf-8", (error, res) => {
  console.log(res);
});

// update file

fs.appendFile("text.txt", " This is my text.", function (err) {
    console.log("Updated!");
  });

// delete file

fs.unlink("text.txt", function (err) {
  console.log("File deleted!");
});
