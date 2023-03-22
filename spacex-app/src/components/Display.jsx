import React from "react";

export default function Display() {
  const images = ["cap_1.jpeg", "cap_2.jpeg", "cap_3.png", "cap_4.jpeg"];

  return (
    <div className="bg-zinc-800 pb-[5rem]">
      <div className="flex flex-wrap justify-center gap-16 w-full">
        {images.map((image, index) => (
          <div className="w-1/5" key={index}>
            <img
              src={`/images/capsules/${image}`}
              alt="Capsule"
              className="w-full h-full object-cover rounded-xl shadow-2xl	"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
