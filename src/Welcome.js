import { useHistory } from "react-router-dom";
import cover from "./cover.jpg";

export function Welcome() {

  const history = useHistory();
  return (
    <div className="center">
      <img src={cover} alt="cover" />
      <h1>WELCOME</h1>
      <div className="btn-container">
        <div className="btn" onClick={() => history.push("/motorbikes")}>Bike Enter</div>
        <div className="btn" onClick={() => history.push("/cars")}>Car Enter</div>
      </div>
    </div>
  );
}
