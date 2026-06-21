"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginWithGoogle, registerUser } from "@/services/authService";
import { registerFormStyles } from "./RegisterForm.styles";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
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
      setError("Google sign up failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      await registerUser(name, email, password);
      router.push("/");
    } catch {
      setError("Could not create account. Try another email.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={registerFormStyles.page}>
      <section className={registerFormStyles.card}>
        <h1 className={registerFormStyles.title}>Create account</h1>

        <p className={registerFormStyles.subtitle}>
          Join V Stream and build your own watchlist.
        </p>

        {error && <p className={registerFormStyles.error}>{error}</p>}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting}
          className={registerFormStyles.googleButton}
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <div className={registerFormStyles.orSeparator}>
          <div className={registerFormStyles.orLine} />
          <span className={registerFormStyles.orText}>OR</span>
          <div className={registerFormStyles.orLine} />
        </div>

        <form className={registerFormStyles.form} onSubmit={handleSubmit}>
          <div className={registerFormStyles.field}>
            <label className={registerFormStyles.label}>Name</label>

            <input
              className={registerFormStyles.input}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className={registerFormStyles.field}>
            <label className={registerFormStyles.label}>Email</label>

            <input
              className={registerFormStyles.input}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className={registerFormStyles.field}>
            <label className={registerFormStyles.label}>Password</label>

            <input
              className={registerFormStyles.input}
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button
            className={registerFormStyles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className={registerFormStyles.footerText}>
          Already have an account?{" "}
          <Link href="/login" className={registerFormStyles.footerLink}>
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
