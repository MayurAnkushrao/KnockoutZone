import { Navigate, useNavigate } from "react-router-dom";
import { GUEST_PATH } from "../routes/guest/GuestPaths";

const LandingPage = () => {
    const navigate = useNavigate();
    const btnHandle = () => {
        navigate(GUEST_PATH.LOGIN);
    }
    return <>
        <div>
            Landing page
        </div>
            <button onClick={btnHandle}>login</button>
    </>
}

export default LandingPage;