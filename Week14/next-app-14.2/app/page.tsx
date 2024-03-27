import axios from "axios";

async function getUserDetails() {
    // await new Promise(() =>
    //     setTimeout(() => {
    //         return;
    //     }, 1)
    // );
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
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
