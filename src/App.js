import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "aqui se coloca un valor por defecto",
    texto: "texto por defecto",
    select: "feliz",
    check: false,
    estado: "feliz",
  });

  const handleChange = ({ target }) => {
    // console.log(target.value, target.checked);
    // console.log(e.target.name);

    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));

    // setValue({ [e.target.name]: e.target.value });
  };

  console.log(value);

  return (
    <div>
      {/* {value.length < 5 ? <span>Longitud minima de 5</span> : null} */}
      <input
        name="normal"
        type="text"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="feliz">Feliz</option>
        <option value="triste">triste</option>
        <option value="molesto">molesto</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        />
        Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        />
        triste
        <input
          onChange={handleChange}
          type="radio"
          value="felipe"
          name="estado"
          checked={value.estado === "felipe"}
        />
        felipe
      </div>
    </div>
  );
};

export default App;
