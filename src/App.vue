<template>
  <div class="main-elements">
      <div class="calculator">
        <div class="calculator-wrapper">
          <div class="output">
        <Output/>
      </div>
      <div class="buttons">
        <Buttons/>
      </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Output from "./views/Output/Output.vue";
import Buttons from "./views/Buttons/Buttons.vue";
export default {
  name: "App",
  components: {
    Output,
    Buttons,
  },
};
</script>

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
  display: grid;
  place-items: center;
  background-color: #8383838d;
}
.calculator{
  width:clamp(300px, 100%, 600px);
  height: 100%;
  display: grid;
  padding: 5%;
}
.calculator-wrapper{
  display: grid;
  grid-template-rows: 35% 65%;
  border-radius: $border-radius;
  background: #023047;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
