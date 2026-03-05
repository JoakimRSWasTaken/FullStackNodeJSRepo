console.log("footer.js is working!"); 

// ©
const copyrightYearTextContent = `©${new Date().getFullYear()}`;

const copyrightYearSpan = document.getElementById('copyright-year');
copyrightYearSpan.textContent = copyrightYearTextContent;