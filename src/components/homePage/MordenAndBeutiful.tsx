// import Image from "next/image";
// import React from "react";
// import map_img from "../../assets/images/map-1.png";
// const MordenAndBeutiful = () => {
//   return (
//     <div className="">
//       <div className="section-title text-center">
//         <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
//           MODERN & BEAUTIFUL
//         </span>
//         <h2 className="section-title text-5xl font-bold">
//           Explore the World for Travel
//         </h2>
//       </div>

//       <div className="flex items-center justify-center m-2">
//         <Image alt="" src={map_img} />
//       </div>
//     </div>
//   );
// };

// export default MordenAndBeutiful;

// import React from "react";

// const MordenAndBeutiful = () => {
//   return (
//     <div className="">
//       <div className="section-title text-center">
//         <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
//           MODERN & BEAUTIFUL
//         </span>
//         <h2 className="section-title text-5xl font-bold">
//           Explore the World for Travel
//         </h2>
//       </div>

//       {/* Embedded Google Map centered on Bangladesh */}
//       <div className="flex items-center justify-center m-2">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670145.6357958574!2d88.08442293605922!3d23.685000403725474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f6ca617d5%3A0xafa59c9f5b1a0a4b!2sBangladesh!5e0!3m2!1sen!2sus!4v1696850220005!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen={true}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MordenAndBeutiful;

import React from "react";

const MordenAndBeutiful = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="block text-lg font-semibold text-indigo-600 mb-2">
          MODERN & BEAUTIFUL
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Explore the World for Travel
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Embark on a journey like never before. Discover stunning places and experience unforgettable adventures.
        </p>
      </div>

      {/* Embedded Google Map */}
      <div className="relative flex items-center justify-center p-2 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-400 opacity-30 rounded-lg"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670145.6357958574!2d88.08442293605922!3d23.685000403725474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f6ca617d5%3A0xafa59c9f5b1a0a4b!2sBangladesh!5e0!3m2!1sen!2sus!4v1696850220005!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg z-10"
        ></iframe>
      </div>

      {/* Decorative Elements */}
      <div className="relative mt-12">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>
    </div>
  );
};

export default MordenAndBeutiful;
