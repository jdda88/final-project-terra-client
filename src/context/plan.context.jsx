import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PlanContext = createContext();

function PlanProvider({ children }) {
    const [plans, setPlans] =useState(null);
    const navigate = useNavigate();

    const getAllPlans = async () => {
        try {
            const response = await api.get("/destinations/all");

            setPlans(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createPlan = async (body) => {
        try {
            const response = await api.post("/destinations", body);

            if (response.status === 200 || response.status === 201) {
                toast.success(body.name + " created successfully");

                getAllPlans();
                navigate("/destinations");
            }
        } catch (error) {
            console.log("error while creating the destination", error);  
        }
    };

    const updatePlan = async (body, id, toggle) => {
        try {
            const response = await api.put("/destinations/" + id, body);

            if (response.status === 200 || response.status === 201) {
                toast.success(response.data.updated.name + "was updated successfully");
                getAllPlans();
                toggle(false);
            }
        } catch (error) {
            toast.error("Error updating this destination");
            console.log(error);
        }
    };
    
    const deletePlan = async (id) => {
        try {
            const check = confirm("Are you sure you want to delete this destination?");
            if (check) {
                const response = await api.delete("/destinations/" + id);

                if (response.status === 200) {
                    toast.success("Destination deleted successfully");
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
        value={{
            plans,
            createPlan,
            updatePlan,
            deletePlan,
            getAllPlans,
        }}
        >
            {children}
        </PlanContext.Provider>
    );
}

export { PlanContext, PlanProvider};