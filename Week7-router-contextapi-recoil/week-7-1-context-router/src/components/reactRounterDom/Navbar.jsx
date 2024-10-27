import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ textAlign: 'center' }}>This is a navbar on both the routes</div>
            <div>
                <button onClick={() => {
                    navigate("/dashboard");
                    // window.location.href = "/dashboard"
                }}>DashBoard</button>
                <button onClick={() => {
                    navigate("/");
                    // window.location.href = "/"
                }}>LandingPage</button>
                <button onClick={() => {
                    navigate("/temp");
                    // window.location.href = "/temp"
                }}>Temp</button>

            </div>
        </div>
    )
}