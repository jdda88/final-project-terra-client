import React from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-feather';

function PlanCard({title, _id}) {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title} <span className="text-black"></span>
      </h5>
      <Link
      to={`$/plan/${_id}`}
      className="font-normal text-gray-700 dark:text-gray-400">
        Brief Summary      
      </Link>
    </Card>
  );
}



export default PlanCard
