import styled from "styled-components";
import { useState } from "react";

export default function Principal() {
  const [letter, setLetter] = useState("");

  return (
      <BoxSld>
        <InputSld placeholder="Digite a letra e <enter>" onChange={(e)=>setLetter(e.target.value)} />
        <MessageSld>Mensagem de erro</MessageSld>
        <ButtonSld>
          X | 1
        </ButtonSld>
        <ButtonSld>
          Z | 2
        </ButtonSld>
      </BoxSld>
  );
}

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ButtonSld = styled.button`
  color: red;
  background-color: green;
  border: 1px solid red;
  font-size: 18px;
  padding: 10px 0px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: limegreen;
    border-color: blue;
  }
`;

const InputSld = styled.input.attrs({ type: "text" })`
  border: 1px solid red;
  font-size: 16px;
  padding: 10px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const MessageSld = styled.p`
  color: magenta;
  font-size: 18px;
`;
