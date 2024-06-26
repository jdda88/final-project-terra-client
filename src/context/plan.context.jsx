import { createContext, useState, useEffect } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PlanContext = createContext();
function PlanProvider({ children }) {
  const [plan, setPlans] = useState([]);
  const navigate = useNavigate();

  const getAllPlans = async () => {
    try {
      const response = await api.get("/plan/all");


      setPlans(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPlan = async (body) => {
    try {
      const response = await api.post("/plan", body);

      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created successfully");

        getAllPlans();
        navigate("/plan");
      }
    } catch (error) {
      console.log("error while creating the plan", error);
    }
  };

  const updatePlan = async (body, id, toggle) => {
    try {
      const response = await api.put("/plan/" + id, body);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was succesfully updated");
        getAllPlans();
        toggle(false);
      }
    } catch (error) {
      toast.error("Error updating this plan");
      console.log("plan update error here >>>>", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      const check = confirm(
        "Are you sure you want to delete this destination?"
      );
      if (check) {
        const response = await api.delete("/plan/" + id);

        if (response.status === 200) {
          toast.success("Destination deleted");
          getAllPlans();

          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPlans();
  }, []);

  return (
    <PlanContext.Provider
      value={{ plan, createPlan, updatePlan, deletePlan, getAllPlans }}
    >
      {" "}
      {children}
    </PlanContext.Provider>
  );
}

export { PlanContext, PlanProvider };

