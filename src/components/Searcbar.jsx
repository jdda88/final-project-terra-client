import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [planSearchData, setPlanSearchData] = useState([]);
  const navigate = useNavigate();

  const styleFunction = {
    control: (base) => ({
      ...base,
      width: '400px',
      minWidth: '100%',
    }),
  };

  const handleChange = (e) => {
    navigate(`/plan/${e.value}`);
  };

  const fetchPlanSearchData = async () => {
    try {

      const response = await api.get("/plan/all"); 
      setPlanSearchData(
        response.data.map((plan) => ({ value: plan._id, label: plan.title }))
      );
    } catch (error) {
      console.log("Error fetching plans:", error);
    }
  };

  useEffect(() => {
    fetchPlanSearchData();
  }, []);

  return (
    <div className="search-container" style={{ display: "flex", alignItems: "center" }}>
      <Select
        id="search-bar"
        styles={styleFunction}
        options={planSearchData}
        onChange={handleChange}
        isClearable={true}
        defaultValue={planSearchData[0]}
      />
    </div>
  );
}

export default SearchBar;
