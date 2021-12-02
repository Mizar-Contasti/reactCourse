import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        // name="name"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.name}

        {...formik.getFieldProps("name")}
      />
      <br />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label>Apellido</label>
      <input type="text" {...formik.getFieldProps("lastname")} />
      <br />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}

      <label>Correo</label>
      <input type="text" {...formik.getFieldProps("email")} />
      <br />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
