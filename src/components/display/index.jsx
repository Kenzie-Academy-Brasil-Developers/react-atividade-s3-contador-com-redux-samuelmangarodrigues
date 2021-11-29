import { useSelector } from "react-redux";

const Display = () => {
  const results = useSelector((store) => store.result);
  return (
    <div>
      <h1>Valor Atual: {results}</h1>
    </div>
  );
};
export default Display;
