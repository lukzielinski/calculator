<template>
    <div class="buttons-container">
      <div class="buttons-row">
        <span class="button gray" @click="clearInput">C</span>
        <span class="button gray" @click="appendOperator('+')">+/-</span>
        <span class="button gray">%</span>
        <span class="button orange" @click="appendOperator('/')">/</span>
      </div>
      <div class="buttons-row">
        <span class="button dark" @click="appendNumber('7')">7</span>
        <span class="button dark" @click="appendNumber('8')">8</span>
        <span class="button dark" @click="appendNumber('9')">9</span>
        <span class="button orange" @click="appendOperator('*')">*</span>
      </div>
      <div class="buttons-row">
        <span class="button dark" @click="appendNumber('4')">4</span>
        <span class="button dark" @click="appendNumber('5')">5</span>
        <span class="button dark" @click="appendNumber('6')">6</span>
        <span class="button orange" @click="appendOperator('-')">-</span>
      </div>
      <div class="buttons-row">
        <span class="button dark" @click="appendNumber('1')">1</span>
        <span class="button dark" @click="appendNumber('2')">2</span>
        <span class="button dark" @click="appendNumber('3')">3</span>
        <span class="button orange" @click="appendOperator('+')">+</span>
      </div>
      <div class="buttons-row">
        <span class="button zero dark" @click="appendNumber('0')">0</span>
        <span class="button dark" @click="appendNumber('.')">.</span>
        <span class="button orange" @click="calculate">=</span>
      </div>
    </div>
  </template>

<script lang="ts">

import { ref, onMounted } from 'vue';

export default {
  setup() {
    const currentInput = ref('');
    const operator = ref('');
    const previousInput = ref('');

    const appendNumber = (number: string) => {
      currentInput.value += number;
    };

    const appendOperator = (op: string) => {
      operator.value = op;
      previousInput.value = currentInput.value;
      currentInput.value = '';
    };

    const calculate = () => {
      let result: number;
      const num1 = parseFloat(previousInput.value);
      const num2 = parseFloat(currentInput.value);

      switch (operator.value) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = NaN; // Division by zero
          }
          break;
        default:
          result = NaN; // Invalid operator
      }

      currentInput.value = result.toString();
      operator.value = '';
        previousInput.value = '';
    };

    const clearInput = () => {
      currentInput.value = '';
      operator.value = '';
      previousInput.value = '';
    };

    onMounted(() => {
      console.log('mounted');
    });

    return {
      currentInput,
      appendNumber,
      appendOperator,
      calculate,
      clearInput,
    };
  },
};
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

    // &:hover {
    //     cursor: pointer;
    // }

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
    }
</style>
