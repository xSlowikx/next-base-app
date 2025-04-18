"use client";

import { MarkersProps } from "@/types/google-maps/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const WorkList = ({ works }: { works: MarkersProps[] }) => {
  //   const works = [
  //     {
  //       title: "Docente Matemática",
  //       location: "Instituto Juan Manuel de rosas, Villa Madero",
  //       shift: "Turno Mañana",
  //     },
  //   ];

  return (
    <div className="max-w-md h-[400px] overflow-y-scroll scrollbar-thin p-2 ">
      {works.map((work, index) => (
        <div key={index} className="bg-[#e3d9bf] rounded-xl p-4 mb-3">
          <h2 className="text-lg font-normal font-sans text-[#2a2a2a] mb-2">
            {work.title}
          </h2>
          <p className="text-[#2a2a2a] text-sm font-sans flex items-center mb-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 text-[14px]"
            />
            {/* {work.location} */}
            Instituto: xxxxxxxxxxxx
          </p>
          <p className="text-[#2a2a2a] text-sm font-sans flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-[14px]" />
            {/* {work.shift} */}
            horario: xx:xx am
          </p>
        </div>
      ))}

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #fefcf3;
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #b7c6a3;
          border-radius: 9999px;
          border: 2px solid #fefcf3;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #b7c6a3 #fefcf3;
        }
      `}</style>
    </div>
  );
};

export default WorkList;
