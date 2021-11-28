import { Component } from "react";
import Producto from "./Producto";

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    // console.log(carro);
    return (
      <div className="detallesCarro">
        <ul className="cart">
          {carro.map((x) => (
            <li className="cart__product" key={x.name}>
              <img alt={x.name} src={x.img} width="50px" height="32px" />
              {x.name}
              <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default DetallesCarro;
