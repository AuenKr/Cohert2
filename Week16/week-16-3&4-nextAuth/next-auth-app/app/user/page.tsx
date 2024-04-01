import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function UserInfo() {
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div>
            <div>User Components</div>
            <div>{JSON.stringify(session)}</div>
        </div>
    );
}
