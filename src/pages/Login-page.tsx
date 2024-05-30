import { Login } from "../components/login"



function LoginPage(){
    const dataLogin = {
        title : "Circle",
        page : "Login to Circle",
        forgot : "forgot password",
        login : "Login",
        create : "create account"
    }

    return(
        <Login
        title = {dataLogin.title}
        page = {dataLogin.page}
        forgot = {dataLogin.forgot}
        login = {dataLogin.login}
        create = {dataLogin.create}/>
    )
}

export default LoginPage