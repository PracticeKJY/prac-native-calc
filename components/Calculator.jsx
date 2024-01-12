import styled from "styled-components/native";
import { useState } from "react";

import Button from "./Button";
import COLOR from "../src/COLOR";
import { FlatList, Text } from "react-native";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  // native에선 e.target.value를 사용할 수 없음.
  // const onPress = (num) => {
  //   const newInput = Number(`${input}${num}`);
  //   setInput(newInput);
  // };

  const onPress = (num) => {
    if (currentOperator) {
      setResult(input);
      setInput(num);
    } else {
      // const newInput = input + num // bad case
      const newInput = Number(`${input}${num}`); // good case
      setInput(newInput);
    }
  };

  const onOperator = (operator) => {
    if (currentOperator !== "=") {
      setCurrentOperator(operator);
    } else {
      let computedResult = result;
      switch (currentOperator) {
        case "+":
          computedResult = result + input;
          break;
        case "-":
          computedResult = result - input;
          break;
        case "*":
          computedResult = result * input;
          break;
        case "/":
          computedResult = result / input;
          break;
        default:
          break;
      }
      setResult(computedResult);
      setInput(computedResult);
    }
  };
  const onPressReset = () => {
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
    setTempInput(null);
    setTempOperator(null);
  };

  return (
    <CalculatorWrap>
      <Text style={{ fontSize: 20 }}>input: {input}</Text>
      <Text style={{ fontSize: 20 }}>currentOperator: {currentOperator}</Text>
      <Text style={{ fontSize: 20 }}>result: {result}</Text>
      <Text style={{ fontSize: 20 }}>tempInput: {tempInput}</Text>
      <Text style={{ fontSize: 20 }}>tempOperator: {tempOperator}</Text>
      {/* 결과  */}
      <InputWrap>
        <InputText>{input}</InputText>
      </InputWrap>
      {/* [AC ~ / ] */}
      <ResetButtonWrap>
        <Button type="reset" text="AC" onPress={() => null} flex={3} />
        <Button type="operator" text="/" onPress={() => onOperator("/")} flex={1} />
      </ResetButtonWrap>
      {/* [7 ~ x] */}
      <ResetButtonWrap>
        {[7, 8, 9].map((num) => {
          return <Button type="num" text={num} onPress={() => onPress(num)} flex={1} />;
        })}
        <Button type="operator" text="*" onPress={() => onOperator("*")} flex={1} />
      </ResetButtonWrap>
      {/* [4 ~ -] */}
      <ResetButtonWrap>
        {[4, 5, 6].map((num) => {
          return <Button type="num" text={num} onPress={() => onPress(num)} flex={1} />;
        })}

        <Button type="operator" text="-" onPress={() => onOperator("-")} flex={1} />
      </ResetButtonWrap>
      {/* [1 ~ +] */}
      <ResetButtonWrap>
        {[1, 2, 3].map((num) => {
          return <Button type="num" text={num} onPress={() => onPress(num)} flex={1} />;
        })}

        <Button type="operator" text="+" onPress={() => onOperator("+")} flex={1} />
      </ResetButtonWrap>
      {/* 0 ~ = */}
      <ResetButtonWrap>
        <Button type="num" text="0" onPress={onPressReset} flex={3} />
        <Button type="operator" text="=" onPress={() => onOperator("=")} flex={1} />
      </ResetButtonWrap>
    </CalculatorWrap>
  );
};

export default Calculator;

const CalculatorWrap = styled.View`
  flex: 1;
  justify-content: center;
  width: 250px;
  margin: 0 auto;
`;

const InputWrap = styled.View`
  min-height: 50px;
  background-color: ${COLOR.RESULT};
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
`;

const InputText = styled.Text`
  color: #fff;
  font-size: 35px;
  text-align: right;
`;

const ResetButtonWrap = styled.SafeAreaView`
  flex-direction: row;
`;
