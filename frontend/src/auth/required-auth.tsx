import { useEffect, useState } from "react";
import useAuthStore from "../store/use-store";
import { Outlet, useNavigate } from "react-router-dom";

const RequiredAuth = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // validate
    if (token) {
      setAuthenticated(true);
      setLoading(false);
    } else {
      setAuthenticated(false);
      setLoading(false);
    }
  }, [token]);

  if (!authenticated) {
    navigate("/login", { replace: true });
  }

  if (!loading && authenticated) return <Outlet />;

  return <div>Loading...</div>;
};

export default RequiredAuth;
