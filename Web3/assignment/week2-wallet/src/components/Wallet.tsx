import { Eye, EyeOffIcon, Trash } from "lucide-react";
import { useState } from "react";

export function Wallet() {
  const [isHide, setIsHide] = useState<boolean>(true);

  const data = {
    name: "Wallet 1",
    type: "Solana",
    publicKey: "83R9GnhgtRNxnyxA9X82gn2owo1ZMquQdwsLZxEqX75J",
    privateKey:
      "2RjviHbr7ienkaX7u8iJk6xhxZehyPa7YhC64AvneiX3qQyTt8XFr9PMVKpAWFydKtGpFoZWBjXngvwSrsCtncnk",
  };

  return (
    <div className="border-2 rounded-xl">
      <div className="flex p-5 justify-between items-center mb-1">
        <div className="text-3xl font-bold">{data.name}</div>
        <div className="p-2 rounded-lg hover:bg-foreground/5">
          <Trash
            className="stroke-red-600 hover:stroke-red-700 hover:cursor-pointer"
            onClick={() => {
              console.log("Delete this");
            }}
          />
        </div>
      </div>
      <div className="bg-foreground/5 p-5 space-y-5">
        <div className="space-y-2">
          <div className="text-xl font-bold">Public Key</div>
          <div className="opacity-80 truncate">{data.publicKey}</div>
        </div>
        <div className="space-y-2">
          <div className="text-xl font-bold">Private Key</div>
          <div className="flex justify-between items-center">
            <div className="w-11/12 opacity-80">
              <MaskedText
                text={data.privateKey}
                type={isHide ? "hide" : "normal"}
              />
            </div>
            <div
              className="hover:cursor-pointer p-1 rounded-lg hover:bg-foreground/10"
              onClick={() => {
                setIsHide((prev) => !prev);
              }}
            >
              {isHide ? <Eye /> : <EyeOffIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedText({
  text,
  type = "hide",
}: {
  text: string;
  type?: "hide" | "normal";
}) {
  if (type === "normal") return <div className="truncate">{text}</div>;
  const maskText = (input: string) => {
    return input.replace(/./g, "*");
  };
  return <div className="truncate">{maskText(text)}</div>;
}
