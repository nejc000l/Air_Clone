import React from "react";
import Image from "next/image";
function MediumCard({ img, title, id }) {
  return (
    <div  className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
      <div className="relative h-80 w-80">
        <Image layout="fill" className="rounded-xl" src={img} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
      <div>

      </div>
    </div>
  );
}

export default MediumCard;
