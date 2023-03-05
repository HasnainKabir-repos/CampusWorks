import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		name:"",
		email: "",
		password: "",
        usercategory: "",
        batch: "",
        department: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome to CampusWorks</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign In
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
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
                    
                        <input
                            type="batch"
                            placeholder="Batch"
                            name="batch"
                            onChange={handleChange}
                            value={data.batch}
                            required
                            className={styles.input}
                        />
                        <select
                            name="department"
                            onChange={handleChange}
							placeholder="Department"
                            value={data.department}
                            required
                            className={styles.input}>
							   <option value="chooseDept">Select Your Department</option>
                               <option value="cse">Computer Science & Engineering (CSE)</option>
                               <option value="eee">Electrical and Electronics Engineering (EEE)</option>
                               <option value="me">Mechanical and Production Engineering (MPE)</option>
							   <option value="civil">Civil and Environmental Engineering (CEE)</option>
							   <option value="btm">Business and Technology Management (BTM)</option>
							   <option value="tve">Technical and Vocational Education (TVE)</option>
                        </select>
						<select
                            name="usercategory"
                            onChange={handleChange}
							placeholder="Choose User Category"
                            value={data.usercategory}
                            required
                            className={styles.input}>
							   <option value="chooseUser">Select Your User Category</option>
                               <option value="currentStudent">Current Student</option>
                               <option value="alumni">Alumni</option>
                               <option value="facultyMember">Faculty Member</option>
                        </select>

						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;