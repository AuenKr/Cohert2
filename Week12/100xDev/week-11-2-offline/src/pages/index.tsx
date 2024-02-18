import { Inter } from "next/font/google";
import { Button, Typography } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <div style={{ height: 60, background: "white", padding: 10 }}>
      {session.data && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h4"} style={{ color: "black" }}>
            {session.data.user?.email}
          </Typography>
          <div>
            <Button variant={"contained"} onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        </div>
      )}
      {!session.data && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h4"} style={{ color: "black" }}>
            Coursera
          </Typography>
          <div>
            <Button variant={"contained"} onClick={() => signIn()}>
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ahoy_visitor=46d5349c-af04-477f-9384-da808bddc9ae; next-auth.csrf-token=88bdda1d8d6d7bc49cf07752877eb1850673b87979dda24f1125b99a8db5bebf%7C1a44959245cd2a1257acb104a8482b9b70613eb7fcb600a11b47af475e908de1; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2F; next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..32ZhTNnXuSs1Sqvb.rC9L8kdJmDlWvcxZIUyFr4a9w9cnrREITnZbArd5nrL_PGljKHQLeCo_sWB4fq8IaOgixuhFi6keUk4CWd29sgWzEaqzy1unqhzIkgqMNEa2ka6SxNQlZqDExie0ZZi5-iajtDP-0k7qixz5gCHo75thiKRoQXZxJM4pRonnY4XEUgWkV0HG37PmhThKEqPisUZP27_xyQ5EG2OWnViXCLhhoIBxvZiDGhb46QfW8T75S08ZWVcsbCsIZEaqSB1hmYABRJE35zzwkXiazcnz6eSPyo3zjBf6sQFXBglQ900Wghw4NCiRChNxV4yrCk4O7L64Ozebu-GFZuXH13eHo7INJ-FSx8wdYoyrWCgH27M.lr-5AL-wvxXMb0uMD1HXxA