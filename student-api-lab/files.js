const fs = require("fs/promises")
const main = async () => {
  try {
    await fs.writeFile("notes.txt", "Hello from Node.js file system!\n");
    await fs.appendFile("notes.txt", "This is an appended line.\n");
    const text= await fs.readFile("notes.txt", "utf-8");
    console.log("File content:\n", text);
    } catch (err) {
        console.error("Error:", err.message);
    }
};
main();