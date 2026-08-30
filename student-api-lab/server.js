const http=require("http");
const path=require("path");
const fs=require("fs/promises");

const PORT=3000;
const server=http.createServer(async(req,res)=>{
    console.log(req.method,req.url);

    try{
        const datafile= path.join(__dirname,"data","students.json");
        const text= await fs.readFile(datafile,"utf-8");
        const students=JSON.parse(text);
        if(req.url==="/"){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end("<h1>Welcome to the Student API</h1>");
            res.end(`
                <ul>
                    <li>GET /api/students</li>
                    <li>GET /api/count</li>
                </ul>
            `);
        }else if(req.url==="/api/students"){
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(students));
        }else if(req.url==="/api/count"){
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({count: students.length}));
        }else if (req.url === "/api/students/random") { 
  const randomIndex = Math.floor(Math.random() * students.length); 
  const randomStudent = students[randomIndex]; 
 
  res.writeHead(200, { 
    "Content-Type": "application/json" 
  }); 
 
  res.end(JSON.stringify(randomStudent)); 
} else{
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({error: "Not Found"}));
        }
    }catch(error){
        
        res.writeHead(500,{"Content-Type":"application/json"});
        res.end(JSON.stringify({error: "Internal Server Error",message: error.message}));
    }
});
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});