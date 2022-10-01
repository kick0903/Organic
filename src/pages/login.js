import "./login.css";
import fbicon from "../img/fb-icon.png";
import ggicon from "../img/gg-icon.png";
function Login() {
    return (
        <>
            <div className="breadbox">

                <a href="/">Home</a>/<text>Login</text>
            </div>


            <form action="action_page.php" />
            <div className="container9">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <label for="uname"><b>Username</b></label>
                            <input className="login-input" type="text" placeholder="Enter Username" name="uname" required />

                            <label for="psw"><b>Password</b></label>
                            <input className="login-input" type="password" placeholder="Enter Password" name="psw" required />
                            <button id="lbtn" type="submit">Login</button>
                            <input className="" type="checkbox" name="remember" /> Remember me

                            <a className="forgot-pw" href=""><i className=""></i> forgot your password?</a>



                        </div>
                        <div className="col login-right"> <br></br> <br></br>
                            <div className="icon-btn">
                                <button className="icon-button" ><img className="login-icon" src={ggicon} /></button> <br></br> <br></br>
                                <button className="icon-button" ><img className="login-icon" src={fbicon} /></button>
                            </div>

                        </div>
                    </div>
                    <div className="login-form">

                        <div className="forgot-pw">
                        </div>

                        <br></br>

                    </div>
                </div>
            </div>







            <form />
        </>

    )

}
export default Login;