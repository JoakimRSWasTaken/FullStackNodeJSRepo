<script>
    const { countDownFrom } = $props();

    let count = $state(countDownFrom);

    function decreaseTheCount() {
        count -= 1;
    }
</script>

<h3>Counter</h3>

<h4>{count}</h4>

<button onclick={decreaseTheCount}>Decrease me!</button>