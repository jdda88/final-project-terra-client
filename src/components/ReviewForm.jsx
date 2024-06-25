import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlanContext } from "../context/plan.context";
import toast from "react-hot-toast";
import api from "../service/api";


function ReviewForm() {
  const [review, setReview] = useState({ title: "", review: "" });
  const { planId } = useParams();
  const { getAllPlans } = useContext(PlanContext);
  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/review/" + planId, review);
      if (response.status === 200 || response.status === 201) {
        toast.success("Review successfully submited.");
        getAllPlans();
        setReview({ title: "", review: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error creating the review!");
    }
  };
  useEffect(() => {
    console.log(review);
  }, [review]);
  return (
    <div className="flex flex-col">
      <form className="center flex-col" onSubmit={handleSubmit}>
        <input
          className="border-solid border-2 border-sky-500 w-80 mt-5 mb-5"
          type="text"
          name="title"
          onChange={handleChange}
          value={review.title}
        />
        <textarea
          className="border-solid border-2 border-sky-500 w-80 h-28 mb-5"
          type="text-area"
          name="review"
          onChange={handleChange}
          value={review.review}
        ></textarea>
        <button className="bg-customGreen text-white rounded w-24 h-9 ">
          Review it!
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
