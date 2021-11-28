import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    // console.log("desde el carro", this);
    const quantity = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span className="bubble">
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>

        <button onClick={mostrarCarro} className="carro">
          Carro
        </button>

        {esCarroVisible === true ? <DetallesCarro carro={carro} /> : null}
        {/* {esCarroVisible
          ? console.log("se abre el carro", esCarroVisible)
          : console.log("se cierra", esCarroVisible)} */}
      </div>
    );
  }
}

export default Carro;
