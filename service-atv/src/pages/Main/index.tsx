import styled from "styled-components";

function Main() {
  return (
    <BodySld>
      <div>oi</div>
    </BodySld>
  );
}

export default Main;

const BodySld = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: auto;
    width: 100%;
  }
`;
