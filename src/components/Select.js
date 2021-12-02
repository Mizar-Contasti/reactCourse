import { useField } from "formik";
const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div>
      <label>{label}</label>

      <select {...field} {...props}>
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </select>
    </div>
  );
};

export default Select;
