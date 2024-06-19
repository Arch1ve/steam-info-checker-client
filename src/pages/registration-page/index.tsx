import { Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
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

export const RegistrationPage = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: "",
            password: '',
        },
        validationSchema: yup.object().shape({
            login: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
        }),
        onSubmit: (): void => {
        },
      });



    return (<Modal open={true}>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                axios({method: "POST", url: "http://31.128.40.203:3000/user/register", data: formik.values})
            }}>
                <FormContainer >
                    <h3>Регистрация</h3>
                    <TextField type="text" name="username" label="Логин" required value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username} autoFocus />
                    <TextField type="email" name="email" label="Почта" required value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}/>
                    <TextField type="password" name="password" label="Пароль" required value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}/>
                    <Button type={"submit"} fullWidth variant="contained" sx={{marginTop: "auto"}} name="submit">Зарегистрироваться</Button>
                    <div><Link to={"/login"} replace={true}>Уже есть аккаунт? Войти</Link></div>
                </FormContainer>
            </form>
    </Modal>)
}


