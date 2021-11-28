import { Component } from "react";

class Input extends Component {
  //   state = { valor: "" };
  //   handleChange = (value) => {
  //     this.setState({ valor: value });
  //   };

  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}

class App extends Component {
  state = {
    nombre: "",
    apellido: "",
  };

  updateNombre(v) {
    this.updateValues("nombre", v.target.value);
  }

  //   updateValues = (prop, value) => {
  //     this.setState({ [prop]: value });
  //   };
  updateValues(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <p>
        Nombre Completo : {`${this.state.nombre}   ${this.state.apellido}`}
        <Input
          value={this.state.nombre}
          onChange={(e) => this.updateValues("nombre", e.target.value)}
        />
        <Input
          value={this.state.apellido}
          onChange={
            //   (e) => this.updateValues("apellido", e.target.value)
            this.updateNombre()
          }
        />
      </p>
    );
  }
}

// class Button extends Component {
//   state = {};
//   constructor(props) {
//     super(props);
//     console.log("constructor", props);
//   }

//   componentDidMount() {
//     console.log("compoenentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("component did update", prevProps, prevState);
//   }

//   componentWillUnmount() {
//     console.log("desmontando componente", this.props, this.state);
//   }

//   render() {
//     console.log("ejecutando metodo render de button");
//     return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
//   }
// }

// class App extends Component {
//   state = { valor: 3 };
//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <p>Hola mundo</p>
//         {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
//         <button onClick={() => this.setState({ valor: 2 })}>
//           Enviar en App
//         </button>
//       </div>
//     );
//   }
// }

export default App;
