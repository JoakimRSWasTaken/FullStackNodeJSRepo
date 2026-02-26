console.log('Hello from frontpage.js');

const guestBookCounter = document.getElementById('guest-book-counter');

        let guestBookCounterValue = 0;

        function incrementCounter() {
            guestBookCounter.textContent = ++guestBookCounterValue;
        } 