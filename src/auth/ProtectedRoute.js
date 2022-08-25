import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser?.email) {
      router.push("/signup");
    }
  }, [currentUser?.email]);
  return children;
};

export default ProtectedRoute;
