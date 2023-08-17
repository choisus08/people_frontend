import { Form } from "react-router-dom";

function Login(props) {
    return <div>
        <h3>Login Form</h3>
        <Form action='/login' method="post">
            <label>Username</label>
            <input type="text" name="username" placeholder="username" />
            <label>Password</label>
            <input type="password" name="password" placeholder="password" />
            <input type='submit' value="Login" />
        </Form>
    </div>
}

export default Login;