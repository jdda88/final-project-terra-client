import React, { useContext } from "react";
import { PlanContext } from "../context/plan.context";
import toast from "react-hot-toast";
import api from "../service/api";

function ReviewCard({ review, user }) {
  const { getAllPlans } = useContext(PlanContext);
  
  const handleDelete = async (reviewId) => {
    try {
      
      const check = confirm("Do you want to delete this review? ");
      if (check) {
        const response = await api.delete("/review/" + reviewId);

        if (response.status === 200) {
          toast.success("Your review was deleted");
          getAllPlans();
        }
      }
    } catch (error) {
      console.log("review error here -->>", error);
    }
  };

  return (
    <div>
      <article className="p-6 text-base bg-white rounded-lg dark:bg-stone-700 w-[50vw]">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://assets-global.website-files.com/642d682a6e4ca0d303c81fdf/65155692e2dc9f25a8fa90a5_ezgif.com-resize.webp"
                alt="test user"
              />
              {review.creator.username}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(review.createdAt).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour12: true,
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-300">{review.review}</p>
        {user && user._id === review.creator._id && (
          <button className="bg-customGreen text-white rounded w-24 h-9" onClick={() => handleDelete(review._id)}>
            Delete comment
          </button>
        )}
      </article>
    </div>
  );
}

export default ReviewCard;
