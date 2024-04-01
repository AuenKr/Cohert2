"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
    const session = useSession();
    return (
        <div>
            <div className="flex justify-between space-x-10">
                <button
                    className="p-3 m-2 bg-blue-600 rounded-full hover:bg-green-500 active:ring-2"
                    onClick={() => signIn()}
                >
                    Sign in
                </button>
                <button
                    className="p-3 m-2 bg-blue-600 rounded-full hover:bg-green-500 active:ring-2"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </div>
            <div className="text-center">
                {JSON.stringify(session.data?.user)}
            </div>
        </div>
    );
}
