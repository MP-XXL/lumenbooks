"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (
        email === "mp@lumen.com" &&
        password === "mp1234"
    ) {
        const cookieStore = await cookies();

        cookieStore.set("loggedIn", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24,
            path: "/",
        });

        cookieStore.set(
            "sellerEmail",
            String(email),
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24,
                path: "/",
            }
        );

        redirect("/dashboard");
    }

    return {
        error: "Invalid email or password",
    };
}
