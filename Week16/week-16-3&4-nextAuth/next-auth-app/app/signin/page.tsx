"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();
    return (
        <div className="flex flex-col h-screen justify-center text-center">
            <div className="font-bold text-2xl">on signin page</div>
            <div className="flex flex-col justify-center items-center space-y-4 pt-4">
                <button
                    className="border rounded-full p-3 hover:bg-blue-500 active:ring-2"
                    onClick={async () => await signIn("google")}
                >
                    Login with Google
                </button>
                <button
                    className="border rounded-full p-3 hover:bg-blue-500 active:ring-2"
                    onClick={async () => await signIn("github")}
                >
                    Login with Github
                </button>
                <button
                    className="border rounded-full p-3 hover:bg-blue-500 active:ring-2"
                    onClick={async () => {
                        const res = await signIn("credentials", {
                            username: "",
                            password: "",
                            redirect: false,
                        });
                        console.log(res);
                        router.push("/");
                    }}
                >
                    Login with Email
                </button>
            </div>
        </div>
    );
}
