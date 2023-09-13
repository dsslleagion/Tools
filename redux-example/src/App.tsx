import { useDispatch, useSelector } from "react-redux";
import { set, setA, setB } from "./features/slice";
import { AppDispatch, RootState } from "./features/store";


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const a = useSelector( (state:RootState) => state.a);
  const b = useSelector( (state:RootState) => state.b);

  return (
    <div>
      <div>A:{a} B:{b}</div>
      <button onClick={()=>dispatch(setA(2))}>setA</button>
      <button onClick={()=>dispatch(setB(2))}>setB</button>
      <button onClick={()=>dispatch(set(3))}>set</button>
    </div>
  );
}

export default App;
