const replInput = document.getElementById('repl-input');
const replOutputCode = document.getElementById('repl-code-output');

replInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
    // console.log('Fatte');    
    runReplInput();
    replInput.value = '';
    }
});

function runReplInput() {
    const replCode = replInput.value;
    replInput.value = '';
    
    fetch('/api/repl', {
                method: "POST",
                body: JSON.stringify({ replCode }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then(({ data }) => { // We removed result from the following statements by destructuring from result to data
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data.output, data.result);
                }
            });
}