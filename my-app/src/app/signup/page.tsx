"use client"; // Dosya client bileşen olduğunu belirtir

import React from "react";
import { useRouter } from "next/navigation"; // next/navigation'dan alındı

const SignUpPage: React.FC = () => {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // İşlem tamamlandıktan sonra login sayfasına yönlendirme
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create an Account</h1>
        <p style={styles.subtitle}>Sign up to get started</p>
        <form style={styles.form} onSubmit={handleSignUp}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p style={styles.footerText}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Log in
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

export default SignUpPage; // Default export unutulmamış!
