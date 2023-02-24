import { useFormik } from "formik"
import validationSchema from "./validations";

function Signup() {
    const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
        initialValues: {
            email: 'sarpertaga@gmail.com',
            password: "",
            passwordConfirm: "",
        },
        onSubmit: values => {
            console.log(values)
          },
          validationSchema,
        });


    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input 
                name="email" 
                value={values.email} 
                onChange={handleChange}
                onBlur={handleBlur}>
            </input>

            {errors.email && touched.email && <div className="error">{errors.email}</div>}

            <br></br>
            <br></br>

            <label htmlFor="password">Password</label>
            <input 
                name="password" 
                value={values.password} 
                onChange={handleChange}>
            </input>

            {errors.password && touched.password && <div className="error">{errors.password}</div>}

            <br></br>
            <br></br>

            <label htmlFor="poasswordconfirm">Possword Confirm</label>
            <input 
                name="passwordConfirm" 
                value={values.passwordConfirm} 
                onChange={handleChange}>
            </input>

            {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}

            <br></br>
            <br></br>

            <button type="submit">Submit</button>

            <br></br>
            <br></br>

            <code>{JSON.stringify(values)}</code>

            </form>
        </div>
    )
}

export default Signup

//handleBlur mesela geçerli bir email girin hatası vermek icin onemli (yupun kendi hata mesajı)