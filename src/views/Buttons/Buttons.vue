<template>
    <div class="buttons-container">
        <div class="buttons-row">
            <span class="button">C</span>
            <span class="button">+/-</span>
            <span class="button">%</span>
            <span class="button">/</span>
        </div>
        <div class="buttons-row">
            <span class="button">7</span>
            <span class="button">8</span>
            <span class="button">9</span>
            <span class="button">*</span>
        </div>
        <div class="buttons-row">
            <span class="button">4</span>
            <span class="button">5</span>
            <span class="button">6</span>
            <span class="button">-</span>
        </div>
        <div class="buttons-row">
            <span class="button">1</span>
            <span class="button">2</span>
            <span class="button">3</span>
            <span class="button">+</span>
        </div>
        <div class="buttons-row">
            <span class="button zero">0</span>
            <span class="button">.</span>
            <span class="button">=</span>
        </div>
    </div>
</template>

<script lang="ts">
    
</script>

<style lang="scss">
 .buttons-container{
    border: 1px solid red;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
 }
 .buttons-row{
    border: 1px solid red;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
 }
 .button{
    border: 1px solid rgb(9, 255, 0);
    margin: 15px 15px 15px 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .buttons-container > div {
    border: 1px solid rgb(86, 255, 8);
 }
.zero{
    grid-column: span 2;
    border: 1px solid rgb(255, 0, 0);
}
</style>
