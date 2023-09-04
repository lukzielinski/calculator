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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
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
}

.button {
    margin: 0px 20px 0px 20px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    user-select: none;
    border-radius: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    color: white;

    @media screen and (max-width: 800px) {
        margin: 0px 25px 0px 25px;
    }

    &:hover {
        cursor: pointer;
    }

    &:active{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        color: rgb(218, 218, 218);
    }
    
    &.orange {
        background-color: #db7704;
    }
    
    &.dark {

        background-color:#02485a ;
        
    }
    
    &.gray {
        background-color: #1a86a1;
    }
}
.zero {
        grid-column: span 2;
        border-color: rgb(255, 0, 0);
    }
</style>
