import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage('./public/pages/frontend/frontend.html'); 
//export const frontpagePage = header + frontpage + footer;
export const frontpagePage = constructPage(frontpage);

const about = readPage('./public/pages/about/about.html');
//export const aboutPage = header + about + footer;
export const aboutPage = constructPage(about, 'Online Node.js REPL | About');

const contact = readPage('./public/pages/contact/contact.html');
export const contactPage = constructPage(contact, 'Online Node.js REPL | Contact');