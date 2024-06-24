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
        <div className="max-w-sm bg-white border rounded-lg">
            <img
            className="rounded-t-lg h-[40vw] object-cover hover:scale-105 transition-all"
            src={image}
            alt=""
            />
            
            <div className="p-5">
              <Link
              to={`/destinations/${_id}`}
              className="inline-flex items-center text-sm font-medium text-center">
              </Link>
            </div>
        </div>
    );
}
export default PlanCard;