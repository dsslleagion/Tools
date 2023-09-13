import { useState } from "react";
import Cep from "./services/Cep";
import { CepProps } from "./types";

function App() {
  const [cep,setCep] = useState("12243750");
  const [response,setResponse] = useState({} as CepProps);

  function obter(){
    Cep.get(cep)
    .then(r => setResponse(r));
  }
  
  return (
    <>
      <div>
        <label>CEP</label>
        <input value={cep} onChange={(e)=>setCep(e.target.value)} />
        <button onClick={obter}>Enviar</button>
      </div>
      <div>
        <p>Logradouro:{response.logradouro}</p>
        <p>Bairro:{response.bairro}</p>
        <p>Cidade:{response.localidade}</p>
      </div>
    </>
  );
}

export default App;
