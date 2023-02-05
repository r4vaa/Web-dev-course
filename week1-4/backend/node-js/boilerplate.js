const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {
	fs.mkdirSync(folderName);
	fs.writeFileSync(`${folderName}/index.html`, "");
	fs.writeFileSync(`${folderName}/app.js`, "");
	fs.writeFileSync(`${folderName}/style.css`, "");
} catch (e) {
	console.log("SOMETHING WENT WRONG!!!");
	console.log(e);
}

// console.log(fs);

// fs.mkdirSync("cats");
// console.log("i Come after MKDIR in the file!!");

// ASYNC function
// fs.mkdir("Dogs", { recursive: true }, (err) => {
// 	console.log("in the callbakc");
// 	if (err) throw err;
// });

// console.log("I come after MKDIR in the file");
