"use client";
import { signUp } from "@/app/actions/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface InputFieldType {
    username: string;
    password: string;
}

export default function SignupComponent() {
    const [data, setData] = useState<InputFieldType>({
        username: "",
        password: "",
    });
    const router = useRouter();
    const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signUp(data.username, data.password);
        console.log(result);
    };
    return (
        <form className="h-svh flex flex-col justify-center items-center">
            <div className="border rounded-lg p-4 space-y-3 text-center">
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={InputHandler}
                        className="border rounded-xl pl-2 m-2"
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        onChange={InputHandler}
                        className="border rounded-xl pl-2 m-2"
                    />
                </div>
                <button
                    type="submit"
                    className="border p-2 rounded-full bg-green-600 hover:bg-green-500 shadow-lg active:translate-y-1 transition-all"
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
