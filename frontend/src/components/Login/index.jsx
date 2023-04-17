import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} 
		catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 class="font-bold text-3xl">Log In to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
                            <p style={{ padding: "25px 2px", fontSize: "14px", color: "#1E40AF", fontWeight:"bold"}}>Forgot Password?</p>
                        </Link>

						{error && <div className={styles.error_msg}>{error}</div>}
						<button 
                          type="submit" className={
                            "border-none outline-none py-3 px-4 hover:shadow-xl hover:shadow-black-100 " + 
                            "text-black rounded-md w-48 font-medium text-base cursor-pointer font-poppins " +
                            "shadow-md my-4 bg-teal-400"
                          }
                          style={{ backgroundColor: '#4FFFB0' }}
                        >
                          Sign In
                        </button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New to</h1>
					<h1>CampusWorks?</h1>
					<Link to="/signup">
						
						{/* Had to convert the style to tailwind */}
						<button type="button" className={"border-none outline-none py-3 px-4 hover:shadow-xl hover:shadow-black-100 bg-white text-black rounded-md w-48 font-medium text-base cursor-pointer font-poppins shadow-md my-4"}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Login;