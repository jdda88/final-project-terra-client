import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import CreatePlanForm from "../components/CreatePlanForm";
import { AuthContext } from "../context/auth.context";

function CreatePlanPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    user && user.isAdmin ? null : navigate("/");
  }, [user]);
  return (
    <div className="center">
      <CreatePlanForm />
    </div>
  );
}

export default CreatePlanPage;