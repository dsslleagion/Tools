import styled from "styled-components";
import { useState } from "react";

export default function Principal() {
  const [sigla, setSigla] = useState("");
  const [nome, setNome] = useState("");

  return (
      <BoxSld>
        <TitleSld>UF</TitleSld>
        <LabelSld>Sigla</LabelSld>
        <InputSld value={sigla} onChange={(e) => setSigla(e.target.value)} />
        <LabelSld>Nome</LabelSld>
        <InputSld value={nome} onChange={(e) => setNome(e.target.value)} />
      </BoxSld>
  );
}

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  margin: 0px 10px;
  border: 1px solid ${(props) => props.theme.borda};
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 20px;
`;

const TitleSld = styled.h4`
  margin: 0px;
`;

const LabelSld = styled.label`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const InputSld = styled.input.attrs({ type: "text" })`
  padding: 8px;
  color: ${(props) => props.theme.texto};
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.borda};
  border-radius: 5px;
`;
