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
      <article className="p-6  bg-gray-200 rounded-lg w-[50vw] shadow-xl">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3  font-bold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719430253/final-project-ironhack/generic-avatar_dtrj43.png"
                alt="test user"
              />
              {review.creator.username}
            </p>
            <p className="text-sm">
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
        <p className="font-semibold">{review.title}: </p>
        <p className="m-2">{review.review}</p>
        {user && user._id === review.creator._id && (
          <button
            className="bg-customGreen text-white rounded w-36 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
            onClick={() => handleDelete(review._id)}
          >
            Delete comment
          </button>
        )}
      </article>
    </div>
  );
}

export default ReviewCard;
