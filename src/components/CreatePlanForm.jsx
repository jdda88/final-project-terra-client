import { useContext, useState } from "react";
import { PlanContext } from "../context/plan.context";

function CreatePlanForm() {
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
    

  const { createPlan } = useContext(PlanContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeStats = (e) => {
    const { name, value } = e.target;
    setStatsInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({...planInfo, stats: statsInfo});
        createPlan({...planInfo, stats: statsInfo});
      }}
      className="center flex-col p-8 m-10 rounded-sm w-[40vw]"
    >
      <label htmlFor="title">Title</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="text"
        name="title"
        onChange={handleChange}
        value={planInfo.title}
      />
      <label htmlFor="country">Country</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="country"
        onChange={handleChange}
        value={planInfo.country}
      />
      <label>Cities</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="text"
        name="cities"
        onChange={handleChange}
        value={planInfo.cities}
      />
      <label >Official Language</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="officialLanguage"
        onChange={handleChangeStats}
        defaultValue={statsInfo.officialLanguage}
      />
      <label >Population</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="population"
        onChange={handleChangeStats}
        defaultValue={statsInfo.population}
      />
      <label>Capital City</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="capitalCity"
        onChange={handleChangeStats}
        defaultValue={statsInfo.capitalCity}
      />
      <label >Currency</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="currency"
        onChange={handleChangeStats}
        defaultvalue={statsInfo.currency}
      />
      <label >Power Outlet</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="powerOutlet"
        onChange={handleChangeStats}
        defaultValue={statsInfo.powerOutlet}
      />
      <label >Images</label>
      <input
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="images"
        onChange={handleChange}
        value={planInfo.images}
      />
      <label >Content</label>
      <textarea
        className="border-solid border-2 rounded border-customGreen w-80 mt-2 mb-5"
        type="string"
        name="content"
        onChange={handleChange}
        value={planInfo.content}
      ></textarea>

      <button
        type="submit"
        className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
      >
        Create
      </button>
    </form>

  );
}

export default CreatePlanForm;
