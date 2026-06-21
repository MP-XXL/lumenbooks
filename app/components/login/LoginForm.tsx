"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./formAction";

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
    <div className="bg-[#0a0a0a] flex items-center justify-center h-screen px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full max-w-md bg-white rounded-2xl p-4"
      >
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
          className="bg-black text-white font-semibold py-3 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}