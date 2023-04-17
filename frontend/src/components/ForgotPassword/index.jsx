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
        <h1 class="text-xl font-bold font-poppins p-4">Forgot Password</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className={styles.input}
        />
        {error && <div className={styles.error_msg}>{error}</div>}
        {msg && <div className={styles.success_msg}>{msg}</div>}
        <button
          type="submit"
          className={
            "border-none outline-none py-3 px-4 hover:shadow-xl hover:shadow-black-100 " +
            "text-black font-bold rounded-md w-80 font-small text-base cursor-pointer font-poppins " +
            "shadow-md my-4 bg-teal-400"
          }
          style={{ backgroundColor: "#4FFFB0", fontWeight: 500 }}
        >
          Send Password Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
