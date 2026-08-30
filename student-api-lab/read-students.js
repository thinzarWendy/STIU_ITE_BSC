const fs=require("fs/promises");
const path=require("path");
const main=async()=>{
    
    try{
        const datafile= path.join(__dirname,"data","students.json");
        const text= await fs.readFile(datafile,"utf-8");
        const students=JSON.parse(text);
        console.log(students);
    } catch (error) {
        console.error("Error reading students file:", error.message);
    }
};
main();