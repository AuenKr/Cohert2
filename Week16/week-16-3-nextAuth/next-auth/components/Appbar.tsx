"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();
    return (
        <div>
            <div className="flex justify-between mx-20 py-3">
                <div className="border rounded-full p-2">Logo</div>
                <div className="space-x-4">
                    <button
                        className="border rounded-full p-2 hover:bg-blue-700 text-white active:ring-4"
                        onClick={() => {
                            signIn();
                        }}
                    >
                        Sign in
                    </button>
                    <button
                        className="border rounded-full p-2 hover:bg-blue-700 text-white active:ring-4"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        Sign out
                    </button>
                </div>
            </div>
            <div>{JSON.stringify(session)}</div>
        </div>
    );
}
