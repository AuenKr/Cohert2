import client from "@/db";

async function getUserDetails() {
    const response = await client.user.findFirst();
    return {
        name: response?.name || "Null",
        email: response?.username,
    };
}

export default async function Home() {
    const userDetail = await getUserDetails();
    return (
        <div className="flex flex-col h-svh justify-center items-center">
            <div>Hi there</div>
            <div>{userDetail.name}</div>
            <div>{userDetail.email}</div>
        </div>
    );
}
