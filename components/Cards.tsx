import React from "react";
import Image from "next/image";
type CardProps = {
  titel: string;
  body: string;
  img: string;
  height?: number;
  width?: number;
  children?: React.ReactNode;
};
const Cards = ({ titel, body, img, height, width, children }: CardProps) => {
  return (
    <div style={{}} className="w-full sm:w-2/4 md:w-1/3 h-full px-6 py-2 ">
      {/* かーど transition duration-150 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded */}
      <div
        style={{
          height: "100%",
        }}
        className=" select-none rounded overflow-hidden h-full shadow  my-2 duration-300 transition  ease-in-out transform "
      >
        {(() => {
          if (height && width) {
            return (
              <Image
                height={height}
                width={width}
                className="w-full  border-gray-700 "
                src={img}
                alt="Sunset in the mountains"
              />
            );
          } else {
            return (
              <img
                className="w-full  border-gray-700 "
                src={img}
                alt="Sunset in the mountains"
              />
            );
          }
        })()}
        <div className="px-6 py-4 pb-6 ">
          <div className="font-bold text-3xl mb-2">{titel}</div>
          <p
            className="text-grey-darker text-base"
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          >
            {children}
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
};
export default Cards;
