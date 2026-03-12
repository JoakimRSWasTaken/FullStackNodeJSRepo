// We can read the file in as a string. fs, file system, is a thing we can use in Node to read files
import fs from 'fs';


// We make sure that options is at least an empty object instead of risking it being undefined
export function constructPage(page, options = {}) {
    const header = fs.readFileSync('./public/components/header/header.html').toString();
    const footer = fs.readFileSync('./public/components/footer/footer.html').toString();
    
    // optional chaining with ? is an option too
    return header
         .replace('$$DOCUMENT_TITLE$$', options?.documentTitle || 'Online Node.js REPL')
         .replace('$$CSS_LINKS$$', options.cssLinks || '')
         + page 
         + footer;
}



// fs has readFile and readFileSync. Usually we never run apps synced but here we want to.
// If we read the files synced then we avoid the risk of the client accessing an endpoint before the page has loaded.
export function readPage(path) {
    return fs.readFileSync(path.toString()); // readFileSync produces a Buffer that we can convert to a string in two ways. toString and UTF8
};