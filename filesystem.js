const fs = require("fs");
const fspromise = require("fs/promises")

fs.readFile("./file.txt", "utf8", (err, content) => {
   if(err){
    return console.log(err)
   }
   console.log(content)

})



// const fileInput = "file system method for write, new file created"
// fs.writeFile("write.txt", fileInput , "utf8", (err)=> {
//     if(err){
//         return;
//     }
//     console.log("written successfully")

// });

// fs.appendFile("write.txt", "append the data in the file, dsgfhdgfdhgfdhsgfdhfg", (err) => {
//     if(err) return;

//     console.log("success")
// });


async function manageFiles() {
    try {
      await fspromise.writeFile("./filetext.txt", "Learning FS module with async/await");
      const data = await fspromise.readFile("filetext.txt", "utf8");
      console.log("File content:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  }
manageFiles();

// fspromise.unlink("./file.txt")
fspromise.mkdir("./testing")