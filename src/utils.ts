export default class Calculator {
    public currentInput = '';
    private operator = '';
    private previousInput = '';
  
    public appendNumber(number: string): void {
      this.currentInput += number;
    }
  
    public appendOperator(op: string): void {
      this.operator = op;
      this.previousInput = this.currentInput;
      this.currentInput = '';
    }
  
    public calculate(): void {
      let result: number;
      const num1 = parseFloat(this.previousInput);
      const num2 = parseFloat(this.currentInput);
  
      switch (this.operator) {
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
  
      this.currentInput = result.toString();
      this.operator = '';
    }
  
    public clearInput(): void {
      this.currentInput = '';
      this.operator = '';
      this.previousInput = '';
    }
  }