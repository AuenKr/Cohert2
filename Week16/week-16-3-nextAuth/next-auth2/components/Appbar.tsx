"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();
    console.log(session);
    return (
        <div>
            <div className="font-bold">
                <button
                    className="m-2 p-3 border rounded-full active:ring-2 hover:bg-blue-800"
                    onClick={() => signIn()}
                >
                    Sign In
                </button>
                <button
                    className="m-2 p-3 border rounded-full active:ring-2 hover:bg-blue-800"
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            </div>
            <div>{JSON.stringify(session.data?.user || "No user found")}</div>
        </div>
    );
}
