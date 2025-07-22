import { Route } from "react-router-dom";
import AdminDashboard from "../../pages/admin/dashboard";
import ProtectedRoutes from "../../components/ProtectedRoute";
import { ROLES } from "../../utils/constants/roles";
import { ADMIN_PATH } from "./AdminPaths";

const AdminRoutes = () => {
    return (
        <Route path={ADMIN_PATH.DASHBOARD} element={
            <ProtectedRoutes allowedRoles={[ROLES.ADMIN]}>
                <AdminDashboard />
            </ProtectedRoutes>
        }
        />
    )
}

export default AdminRoutes;