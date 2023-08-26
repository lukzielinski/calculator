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
  border: 1px solid red;
}
.calculator{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 35% 65%;
}
</style>
