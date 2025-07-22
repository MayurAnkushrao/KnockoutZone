import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../utils/constants/roles";
import { ADMIN_PATH } from "../../routes/admin/AdminPaths";

const LoginPage = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated, role} = useSelector((state) => state.auth);

    const handleLogin = () => {
        dispath(
            login({
                user: {name: 'Ayush'},
                role: ROLES.ADMIN,
            })
        );
        navigate(ADMIN_PATH.DASHBOARD);
    };

    const handleLogout = () => {
        dispath(logout());
    }

    return (
        <div>
            <h2>Login Page</h2>
            <p>Staus: {isAuthenticated? `Logged in as ${role}` : 'Not Logged In'}</p>
            <button onClick={handleLogin}>Login as Admin</button>
            <div />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LoginPage;