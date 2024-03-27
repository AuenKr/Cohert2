import React from "react";

export default function SignupLayout({ children } : {children : React.ReactNode}) {
    return (
        <>
            <div className="text-center sticky top-0 border-b py-4 bg-white bg-opacity-95">Signin now and get 20% off</div>
            <div>{children}</div>
        </>
    );
}
