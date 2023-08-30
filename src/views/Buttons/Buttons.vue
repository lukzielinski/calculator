<template>
    <div class="buttons-container">
        <div class="buttons-row">
            <span class="button gray">C</span>
            <span class="button gray">+/-</span>
            <span class="button gray">%</span>
            <span class="button orange">/</span>
        </div>
        <div class="buttons-row">
            <span class="button dark">7</span>
            <span class="button dark">8</span>
            <span class="button dark">9</span>
            <span class="button orange">*</span>
        </div>
        <div class="buttons-row">
            <span class="button dark">4</span>
            <span class="button dark">5</span>
            <span class="button dark">6</span>
            <span class="button orange">-</span>
        </div>
        <div class="buttons-row">
            <span class="button dark">1</span>
            <span class="button dark">2</span>
            <span class="button dark">3</span>
            <span class="button orange">+</span>
        </div>
        <div class="buttons-row">
            <span class="button zero dark">0</span>
            <span class="button dark">.</span>
            <span class="button orange">=</span>
        </div>
    </div>
</template>

<script lang="ts">
    
</script>

<style lang="scss">
.buttons-container {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
}

.buttons-row {
    display: grid;
    grid-template-columns: repeat(4, 25%);
}

.button {
    margin: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
    
    // &.orange {
    //     background-color: #f59220;
    //     background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
    // }
    
    // &.dark {
    //     background-color: #000000;
    //     background-image: linear-gradient(315deg, #000000 0%, #5e5368 74%);

    // }
    
    // &.gray {
    //     background-color: #a399b2;
    //     background-image: linear-gradient(147deg, #a399b2 0%, #4d4855 74%);

    // }
}
.zero {
        grid-column: span 2;
        border-color: rgb(255, 0, 0);
    }
</style>
