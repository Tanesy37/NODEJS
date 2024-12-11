
import { promises as fs } from "fs"


function write() {
    fs.appendFile("./text.txt", "\nmore file bro")
        .then(() => console.log("files updated"))
        .catch((error) => console.log("error" + error))
    console.log("files updated1")

}
write()

