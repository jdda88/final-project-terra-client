import { createContext, useState, useEffect } from "react";
import api from "../service/api";

const PlanContext = createContext();
function PlanProvider ({children}) {
    const [plans, setPlans] = useState(null)

    const getAllPlans= async () => {
        try {
            const response = await api.get("/destinations/all")

            setPlans(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllPlans();
}, []);

    return (
        <PlanContext.Provider value={{plans}}> 
        {" "}
        {children}
        </PlanContext.Provider>
);
}
export {PlanContext, PlanProvider}