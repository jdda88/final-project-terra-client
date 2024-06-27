import { PlanContext } from "../context/plan.context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditPlanForm({ toggleEdit, setToggleEdit }) {
  const [currPlan, setCurrPlan] = useState(null);
  const { planId } = useParams();

  const [planInfo, setPlanInfo] = useState({
    title: "",
    country: "",
    cities: "",
    stats: {},
    images: [],
    content: "",
  });

  const [statsInfo, setStatsInfo] = useState({
    officialLanguage: "",
    population: "",
    capitalCity: "",
    currency: "",
    powerOutlet: "",
  });

  const { plan, updatePlan } = useContext(PlanContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrPlan((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeStats = (e) => {
    const { name, value } = e.target;
    setStatsInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    plan && setCurrPlan(plan.find((plan) => plan._id === planId));
  }, [toggleEdit]);
  return (
    currPlan && (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePlan({ ...currPlan, stats: statsInfo }, planId, setToggleEdit);
        }}
        className="center flex-col border-2 rounded w-[40vw] h-full "
      >
        <label htmlFor="title">Title</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="text"
          name="title"
          onChange={handleChange}
          defaultValue={planInfo.title}
        />
        <label>Country</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="text"
          name="country"
          onChange={handleChange}
          defaultValue={planInfo.country}
        />
        <label htmlFor="cities">Cities</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="text"
          name="cities"
          onChange={handleChange}
          defaultValue={planInfo.cities}
        />
        <label htmlFor="officialLanguage">Official Language</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="officialLanguage"
          onChange={handleChangeStats}
          defaultValue={statsInfo.officialLanguage}
        />
        <label htmlFor="population">Population</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="population"
          onChange={handleChangeStats}
          defaultValue={statsInfo.population}
        />
        <label htmlFor="capitalCity">Capital City</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="capitalCity"
          onChange={handleChangeStats}
          defaultValue={statsInfo.capitalCity}
        />
        <label htmlFor="currency">Currency</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="currency"
          onChange={handleChangeStats}
          defaultvalue={statsInfo.currency}
        />
        <label htmlFor="powerOutlet">Power Outlet</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="powerOutlet"
          onChange={handleChangeStats}
          defaultValue={statsInfo.powerOutlet}
        />
        <label htmlFor="images">Images</label>
        <input
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="images"
          onChange={handleChange}
          defaultValue={planInfo.images}
        />
        <label htmlFor="content">Content</label>
        <textarea
          className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
          type="string"
          name="content"
          onChange={handleChange}
          defaultValue={planInfo.content}
        ></textarea>

        <button
          type="submit"
          className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
        >
          Submit Edit
        </button>
      </form>
    )
  );
}

export default EditPlanForm;
