import { useParams, useNavigate } from "react-router-dom"
import '../App.css';

export const Login = () => {

    const params = useParams()
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        // navigate(-1);
        navigate("/dashboard")
    }

    return (
        <>
        <div className="login-container">
            <div className='login-header'>
                <span>Login Account</span>
            </div>
            <div className='login-input'>
                <input type={'text'} placeholder='Email ID' />
            </div>
            <div className='login-input'>
                <input type={'password'} placeholder='Password' />
            </div>
            <div className='login-input'>
                <span className='login-input-span'>
                    <input type={"checkbox"} checked={true} className='checkbox' />
                    <label> Keep me signed in</label>
                </span>
                <span className='login-input-span already-member'>
                    Already Member?
                </span>
            </div>
            <div className='login-input'>
                <button className='login-btn' onClick={login}>LOGIN</button>
            </div>
        </div>
        </>
    );
} 