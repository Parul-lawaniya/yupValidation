// import React, { useState } from "react";
// import { Button, TextField, Container, Typography, Box } from "@mui/material";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import axios from "../axios";
// import { useFormik } from "formik";
// import { signUpSchemas } from "../schemas";

// const initialValues = {
//   fullName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const RegistrationForm = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       validationSchema: signUpSchemas,
//       initialValues: initialValues,
//       onSubmit: (values) => {
//         console.log(values);
//       },
//     });
//     console.log(initialValues,"iiii")

//   //   const [inputData, setInputData] = useState({
//   //           fullName:"",
//   //           email:"",
//   //           password:"",
//   //           confirmPassword:"",
//   //   });

//   //   const handleSubmit = () => {};

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: "20vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Registration Form
//         </Typography>
//         {/* <form onSubmit={handleSubmit}> */}
//         <form >
//           <div>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="fullName"
//               label="Full Name"
//               name="fullName"
//               autoComplete="name"
//               autoFocus
//               value={values.fullName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               // onChange={(e) =>setInputData(e.target.value)}
//             />
//             {errors.fullName && touched.name ?(
//             <p className="form-error">{errors.fullName}</p>
//           ):null}
//           </div>
//           <div>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}

//             // onChange={(e) => setInputData(e.target.value)}
//           />
//              {errors.email && touched.email  ?(
//                 <p className="form-error">{errors.email}</p>
//               ):null}
//           </div>
//           <div>
//           <TextField
//             margin="normal"
//             // type="password"
//             required
//             fullWidth
//             id="password"
//             label="Password"
//             name="password"
//             autoComplete="off"
//             autoFocus
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             // onChange={(e) =>setInputData(e.target.value)}
//           />
//           {errors.password && touched.password ?(
//             <p className="form-error">{errors.password}</p>
//           ):null}
//           </div>
//           <div>
//           <TextField
//             margin="normal"
//             // type="password"
//             required
//             fullWidth
//             id="confirmPassword"
//             label=" Confirm Password"
//             name="confirmPassword"
//             autoComplete="off"
//             autoFocus
//             value={values.confirmPassword}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             // onChange={(e) => setInputData(e.target.value)}
//           />
//           {errors.confirmPassword && touched.confirmPassword?(
//             <p className="form-error">{errors.confirmPassword}</p>
//           ):null}
//           </div>
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             type="submit"
//             // onSubmit={handleSubmit}
//             // onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default RegistrationForm;


import React from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import { signUpSchemas } from "../schemas";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    validationSchema: signUpSchemas,
    initialValues: initialValues,
    onSubmit: (values,action) => {
      console.log(values);
      resetForm();
    },
  });
//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log('formFilled')
//     console.log('values', values)
//   }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <FormHelperText error>
            {errors.fullName && touched.fullName ? errors.fullName : null}
          </FormHelperText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
           
          />
          <FormHelperText error>
            {errors.email && touched.email ? errors.email : null}
          </FormHelperText>

          <TextField
            margin="normal"
            // type="password"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            autoFocus
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
      
          />
          <FormHelperText error>
          {errors.password && touched.password ? errors.password :""}
          </FormHelperText>

          <TextField
            margin="normal"
            // type="password"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            autoComplete="off"
            autoFocus
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
           
          />
          <FormHelperText error>
            {errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : null}
          </FormHelperText>

          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
