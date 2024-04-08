import { Card } from "@/components/ui/card";

import { Link } from "react-router-dom";

const AmrutCards = ({ name, description, image }) => {
  return (
    <div className="max-w-xs" style={{ width: "200px", height: "150px" }}>
      <Link to={`/${name.toLowerCase()}`}>
        <Card className="bg-transparent    bg-opacity-75  shadow-md hover:transform hover:scale-105 transition-transform">
          <div className="relative isolate flex flex-col  overflow-hidden rounded-lg px-8 pb-8 pt-16 ">
            <img
              src={image}
              alt={name}
              className="absolute inset-0  object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-xl font-bold text-white">{name}</h3>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default AmrutCards;
