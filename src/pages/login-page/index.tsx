import { Button, TextField, styled, } from "@mui/material"
import { useFormik } from "formik"
import { Modal } from "../../shared";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";


const FormContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "16px",
    padding: "24px",
    height: "100%"
})


export const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            login: yup.string().required(),
            password: yup.string().required().min(8),
        }),
        onSubmit: () => {
        },
      });


    return (<Modal open={true}>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                axios({method: "POST", url: "http://31.128.40.203:3000/user/login", data: formik.values})
            }}>
                <FormContainer >
                    <h3>Войдите в аккаунт</h3>
                    <TextField type="text" name="login" label="Логин" required value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login} autoFocus />
                    <TextField type="password" name="password" label="Пароль" required value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}/>
                    <Button type={"submit"} fullWidth variant="contained" sx={{marginTop: "auto"}}>Войти</Button>
                    <div><Link to={"/register"} replace={true}>Зарегистрироваться</Link></div>
                </FormContainer>
            </form>
    </Modal>)
}