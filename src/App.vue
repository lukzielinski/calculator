<template>
  <div class="main-elements">
      <div class="calculator">
        <div class="output">
        output
      </div>
      <div class="buttons">
        buttons
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
  
}
.calculator > div {
  border: 1px solid rgb(255, 72, 0);
}
.calculator{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 35% 65%;
  padding: 10%;
  border: 1px solid red;
}
.output{
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}
.buttons{
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}
</style>
