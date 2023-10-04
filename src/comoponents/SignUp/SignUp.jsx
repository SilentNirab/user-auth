import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../Firebase/firebae.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SignUp = () => {

    const [signupError, setSignupError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handelSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepts = e.target.terms.checked;
   
        // reset error and success
        setSignupError('')
        setSuccess('')

        if (password.length < 6) {
            setSignupError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignupError('Your password should have at least one upper case characters.');
            return;
        }
       else if (!accepts) {
            setSignupError('Please accept our terms and conditions!');
            return
       }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User create succesfully');
                sendEmailVerification(result.user)
                .then(()=>{
                    alert('Pelase provide a valid Email')
                })
            })
            .catch(error => {
                setSignupError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handelSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={
                                        showPassword ? 'text' : 'password'
                                    } placeholder="password" name="password" className="input input-bordered" required />
                                    <span className="absolute top-14 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                    <div className="mb-2">
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label className="ml-2" htmlFor="terms">Accept our <Link href="" className="text-blue-500">Terms and Conditions</Link></label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignUp</button>
                                </div>
                                {
                                    signupError && <p className="text-red-400">{signupError}</p>
                                }
                                {
                                    success && <p className="text-green-400">{success}</p>
                                }
                                 <p>Already have an account? Please <Link to="/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;