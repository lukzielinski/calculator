<template>
  <div class="main-elements">
      <div class="calculator">
        <div class="calculator-wrapper">
          <div class="output">
        output
      </div>
      <div class="buttons">
        buttons
      </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">

$border-radius: 20px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-elements {
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.calculator > div {
  border: 1px solid rgb(255, 72, 0);
}
.calculator{
  width: 100%;
  height: 100%;
  display: grid;
  padding: 10%;
 
}
.calculator-wrapper{
  display: grid;
  grid-template-rows: 35% 65%;
  border-radius: $border-radius;
}
</style>
