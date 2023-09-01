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
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
.buttons-container {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
}

.buttons-row {
    display: grid;
    align-items: center;
    justify-content: space-around   ;
    grid-template-columns: repeat(4, 25%);
    border: 1px solid red;
}

.button {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Black Ops One', cursive;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
    
    &.orange {
        color: white;
        font-size: 20px;
        border: 1px solid gray;
    }
    
    &.dark {
        border: 1px solid gray;
    }
    
    &.gray {
        border: 1px solid gray;
    }
}
.zero {
        grid-column: span 2;
        border-color: rgb(255, 0, 0);
    }
</style>
