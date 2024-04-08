import { PrismaClient } from "@repo/db/client";
import { Balance } from "../../components/Balance";

const client = new PrismaClient();

export default function Page(): JSX.Element {
    return (
        <div>
            <div className="text-5xl">
                <Balance />
            </div>
            <div className="font-bold text-4xl text-center">Hi there</div>
        </div>
    );
}
