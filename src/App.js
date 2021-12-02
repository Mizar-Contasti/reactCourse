import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Radio from "./components/Radio";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = " Requerido";
  } else if (values.name.length < 5) {
    errors.name = " el nombre tener mas de 6 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = " Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = " el apellido tener mas de 6 caracteres";
  }

  if (!values.email) {
    errors.email = " Requerido";
  } else if (values.email.length < 4) {
    errors.email = " el correo tener mas de 5 caracteres";
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        select: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name={"name"} label={"Nombre"} />

        {/* <Field name={"select"} as={"select"}>
          <option value="fresa">fresa</option>
          <option value="pera">pera</option>
        </Field> */}

        <br />

        <TextInput name={"lastname"} label={"Apellido"} />
        <br />
        <TextInput name={"email"} label={"Email"} />

        <Select label="Tipo de chancho" name="chancho">
          <option value="">Seleccione Chancho</option>
          <option value="felipe">Felipe</option>
          <option value="triste">triste</option>
        </Select>

        <Checkbox name={"accept"}>Aceptar Terminos y Condiciones</Checkbox>

        <Radio name={"radio"} value="chancho1" label="chancho1" />
        <Radio name={"radio"} value="chancho2" label="chancho2" />
        <Radio name={"radio"} value="chancho3" label="chancho3" />
        <ErrorMessage name="radio" />

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
