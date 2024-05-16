import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Sender from "./page/Sender.tsx";
import Receiver from "./page/Receiver.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sender",
        element: <Sender />,
    },
    {
        path: "/receiver",
        element: <Receiver />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);
