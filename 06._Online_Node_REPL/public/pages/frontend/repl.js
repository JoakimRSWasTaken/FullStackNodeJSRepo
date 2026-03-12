const replInput = document.getElementById('repl-input');
const replCodeOutputDiv = document.getElementById('repl-code-output');

replInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        // console.log('Fatte');    
        runReplInput();
        //replInput.value = '';
    }
});

function runReplInput() {
    const replCode = replInput.value;
    replInput.value = '';
    addInput(replCode);


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
                //console.log(data.error);
                addError(data.error);
            } else {
                //console.log(data.output, data.result);
                addOutPutAndResult(data.output, data.result);
            }
        });
}

function addInput(replCode) {
    const replPromptDiv = document.createElement('div');
    replPromptDiv.textContent = `> ${replCode}`;
    replPromptDiv.classList.add('repl-code-prompt');

    replCodeOutputDiv.appendChild(replPromptDiv);
    scrollToTheBottom();
}

function addError(error) {
    const replErrorDiv = document.createElement('div');
    replErrorDiv.textContent = `${error}! Please try again.`;
    replErrorDiv.classList.add('repl-code-error');

    replCodeOutputDiv.appendChild(replErrorDiv);
    scrollToTheBottom();
}

function addOutPutAndResult(output, result) {
    if (output) {
        const replOutputDiv = document.createElement('div');
        replOutputDiv.textContent = `${output}`
        replOutputDiv.classList.add('repl-code-output');

        replCodeOutputDiv.appendChild(replOutputDiv);
    }

    const replResultDiv = document.createElement('div');
    replResultDiv.textContent = `${result}`
    replResultDiv.classList.add('repl-code-result');

    replCodeOutputDiv.appendChild(replResultDiv);
    scrollToTheBottom();
}

function scrollToTheBottom() {
    // Toppen af min scroll er bare hele min scroll høj
    replCodeOutputDiv.scrollTop = replCodeOutputDiv.scrollHeight;
}