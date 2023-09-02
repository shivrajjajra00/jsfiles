// // const app = require("./app");

// // console.log(app.z());

// // const fs = require("fs");

// // fs.writeFileSync("new file3.text", " shiva");

// // const fs = require("fs");
// // console.log("-=>>>", __filename);

// // const fs = require("fs");
// // console.log("-=>>>", __dirname);

// // const http = require("http");
// // http
// //   .createServer((req, resp) => {
// //     resp.write("my name is shivraj");
// //     resp.end();
// //   })
// //   .listen(4200);

// // const http = require("http");
// // http
// //   .createServer((req, res) => {
// //     res.write("hello wecode");
// //     res.end();
// //   })
// //   .listen(1100);

// // const https = require("http");

// // https
// //   .createServer((req, resp) => {
// //     resp.write("<h1>hello shiva</h1>");
// //     resp.end();
// //   })
// //   .listen(1200);

// // const http = require("http");

// // http
// //   .createServer((req, res) => {
// //     res.write("hello brother");
// //     res.end();
// //   })
// //   .listen(1300);

// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "applicationjson" });
//     resp.write(
//       JSON.stringify({ name: "shiv", age: 12, mail: "shiv@test.com" })
//     );
//     resp.end();
//   })
//   .listen(4200);

// console.log(document);
// console.log(document.getElementById("hello"));

let mainDiv = document.getElementById("mainDiv");
mainDiv.style.backgroundColor = "pink";

let form = document.getElementById("form");
form.style.textAlign = "center";

function loginForm() {
  var name = document.forms["regform"]["inputText"].value;
  var number = document.forms["regform"]["inputNumber"].value;
  var password = document.forms["regform"]["inputPassword"].value;
  var email = document.forms["regform"]["inputEmail"].value;

  if (!name || !number || !password || !email) {
    alert("All fields are required!");
    return false;
  }
  return true;
}
