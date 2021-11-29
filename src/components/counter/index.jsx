import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/contador/action";
import "./styles.css";
const Counter = () => {
  const dispath = useDispatch();
  return (
    <div>
      <button className="Btns" onClick={() => dispath(addNumber(1))}>
        Aumentar contagem
      </button>
      <button className="Btns" onClick={() => dispath(subNumber(1))}>
        Diminuir contagem
      </button>
    </div>
  );
};
export default Counter;
