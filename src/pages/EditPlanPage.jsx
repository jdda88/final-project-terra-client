// import { useNavigate } from "react-router-dom";
// import { useEffect, useContext } from "react";
// import EditPlanForm from "../components/EditPlanForm";
// import { AuthContext } from "../context/auth.context";

// function EditPlanPage() {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     user && user.isAdmin ? null : navigate("/");
//   }, [user]);
//   // console.log("user console log for edit>>", user);
  
//   return (
//     <div className="center">
//       <EditPlanForm />
//     </div>
//   );
// }

// export default EditPlanPage;