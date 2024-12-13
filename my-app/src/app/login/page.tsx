import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <p style={styles.subtitle}>Login to access your account</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.footerText}>
          Don&apos;t have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #1a1c2c, #302b63, #0f0c29)", // Arka plan degrade
    color: "#fff",
    padding: "20px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Şeffaf beyaz
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    backdropFilter: "blur(10px)", // Şık bir bulanıklık efekti
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#fff",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#ddd",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
  },
  button: {
    padding: "12px 15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#ccc",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default LoginPage;
