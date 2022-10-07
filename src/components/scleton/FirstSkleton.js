import React from "react";
import SkletonCard from "./SkletonCard"

export default function FirstSkleton() {
  return (
    <div className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center xl:gap-6 gap-4 px-3 sm:px-0">
     {[1,2,3,4,5,6,7,8].map((n, id) =>(<SkletonCard key={id} /> ) )}
    </div>
  );
}
