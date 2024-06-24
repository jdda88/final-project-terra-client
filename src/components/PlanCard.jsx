import { Link } from "react-router-dom";

function PlanCard({
    title,
    country,
    cities,
    stats,
    images,
    content,
    _id,
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
      <img
        className="rounded-t-lg h-[40vh] w-[40vw] object-cover hover:scale-105 transition-all"
        src={image}
        alt=""
      />

      <div className="p-5">

        <Link
          to={`/destinations/${_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-black rounded-lg hover:bg-terra-green focus:ring-4 focus:outline-none focus:ring-terra-green transition-all"
        >
          Learn More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PlanCard;