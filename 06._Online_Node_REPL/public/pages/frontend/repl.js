const replInput = document.getElementById('repl-input');
const replOutputCode = document.getElementById('repl-code-output');

replInput.addEventListener('keyup', (event) => {
    console.log('Fatte');
});

function runReplInput() {
    fetch('/api/repl', {
                method: "POST",
                body: JSON.stringify({ replCode: replInput.value }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            });
    }