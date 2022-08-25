import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser?.email || currentUser?.email) {
      router.push("/");
    }
  }, [currentUser?.email]);
  return children;
};

export default ProtectedRoute;
