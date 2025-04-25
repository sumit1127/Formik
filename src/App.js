import Formik from "./components/Formik";
const App = () => {
  return (
    <div>
      <Formik />
    </div>
  );
};

export default App;

// import React from "react";
// import { useFormik } from "formik";

// const initialValues = {
//   email: "",
//   password: "",
// };

// const onSubmit = (values) => {
//   alert(JSON.stringnify(values, null, 2));
// };

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   console.log("Form errors", formik.errors);

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         name="password"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//       />
//       {formik.errors.password ? <div>{formik.errors.password}</div> : null}

//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignupForm;
