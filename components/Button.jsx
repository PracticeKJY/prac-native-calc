import styled from "styled-components/native";
import COLOR from "../src/COLOR";

// button type : 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, type, flex }) => {
  const bgColor = type === "reset" ? COLOR.RESET : type === "operator" ? COLOR.OPERATOR : type === "num" ? COLOR.NUM : COLOR.RESULT;

  return (
    <ButtonWrap onPress={onPress} flex={flex} bgColor={bgColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.TouchableOpacity`
  height: 50px;
  flex: ${(props) => props.flex};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  border-color: #000;
  border-width: 0.2px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 25px;
`;
