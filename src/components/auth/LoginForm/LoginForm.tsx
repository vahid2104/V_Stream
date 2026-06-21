"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginUser, loginWithGoogle } from "@/services/authService";
import { loginFormStyles } from "./LoginForm.styles";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleGoogleLogin() {
    setError("");
    setIsSubmitting(true);

    try {
      await loginWithGoogle();
      router.push("/");
    } catch {
      setError("Google login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      await loginUser(email, password);
      router.push("/");
    } catch {
      setError("Email or password is incorrect.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={loginFormStyles.page}>
      <section className={loginFormStyles.card}>
        <h1 className={loginFormStyles.title}>Welcome back</h1>

        <p className={loginFormStyles.subtitle}>
          Login to continue watching on V Stream.
        </p>

        {error && <p className={loginFormStyles.error}>{error}</p>}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting}
          className={loginFormStyles.googleButton}
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <div className={loginFormStyles.orSeparator}>
          <div className={loginFormStyles.orLine} />
          <span className={loginFormStyles.orText}>OR</span>
          <div className={loginFormStyles.orLine} />
        </div>

        <form className={loginFormStyles.form} onSubmit={handleSubmit}>
          <div className={loginFormStyles.field}>
            <label className={loginFormStyles.label}>Email</label>

            <input
              className={loginFormStyles.input}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className={loginFormStyles.field}>
            <label className={loginFormStyles.label}>Password</label>

            <input
              className={loginFormStyles.input}
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button
            className={loginFormStyles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className={loginFormStyles.footerText}>
          Do not have an account?{" "}
          <Link href="/register" className={loginFormStyles.footerLink}>
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}
