import "../css/adminlogin.css"
const AdminLogin=()=>{
    return(
        <>
            <div className="admin-login">
                <div className="login-cont">
                    <span className="login-title">Log-In</span>
                    <input className="login-input" type="text" placeholder="E-mail"></input>
                    <input className="login-input" type="password" placeholder="Password"></input>
                    <button className="login-button"type="submit">Log In</button>
                </div>
            </div>
        </>
    );
}
export default AdminLogin;