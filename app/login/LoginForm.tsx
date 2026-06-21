"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./formAction";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  async function onSubmit(data: LoginFormData) {
    setServerError("");

    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await loginAction(formData);

    if (result?.error) {
      setServerError(result.error);
    }
  }

  return (
    <div className="bg-[#0a0a0a]  h-screen p-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-white hover:text-amber-300 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,68H132V32a12,12,0,0,0-20.49-8.48l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h76a20,20,0,0,0,20-20V88A20,20,0,0,0,208,68Zm-4,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h84Z"></path></svg>Back to home
      </Link>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full max-w-md bg-white rounded-2xl p-4">
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 bg-[#1E1E1E] text-white rounded-xl"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 bg-[#1E1E1E] text-white rounded-xl"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {serverError && (
            <p className="text-red-500 text-sm text-center">
              {serverError}
            </p>
          )}

          <button
            disabled={isSubmitting}
            className="bg-black text-white font-semibold py-3 rounded disabled:opacity-50">
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}