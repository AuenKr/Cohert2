import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <App />
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>
);
