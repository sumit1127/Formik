import "../styles.css";
import { useFormik } from "formik";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
    validate: (values) => {
      //values contain three properties name, email,city and
      // err obj should be similar to that values obj
      //errors.name, errors.email, errors.city
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (!email.includes("@")) {
        errors.email = "Invalid email";
      }
      
      if (!values.city) {
        errors.city = "Required";
      }
    },
  });

  //   console.log("Form values", formik.values);

  return (
    <form className="formik" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={formik.handleChange}
        value={formik.values.city}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default Formik;
