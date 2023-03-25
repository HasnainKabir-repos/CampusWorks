import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://localhost:8080/api/password-reset`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
			    <h1 class="text-2xl font-bold font-poppins">Forgot Password</h1>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className={styles.input}
				/>
				{error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button 
                          type="submit" className={
                            "border-none outline-none py-3 px-4 hover:shadow-xl hover:shadow-black-100 " + 
                            "text-black rounded-md w-48 font-small text-base cursor-pointer font-poppins " +
                            "shadow-md my-4 bg-teal-400"
                          }
                          style={{ backgroundColor: '#4FFFB0' }}
                >
                    Submit
                </button>
			</form>
		</div>
	);
};

export default ForgotPassword;