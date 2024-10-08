import React from "react";

const MordenAndBeutiful = () => {
  return (
    <div className="">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          MODERN & BEAUTIFUL
        </span>
        <h2 className="section-title text-5xl font-bold">
          Explore the Bangladesh for Travel
        </h2>
      </div>

      {/* Embedded Google Map centered on Bangladesh */}
      <div className="flex items-center justify-center m-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670145.6357958574!2d88.08442293605922!3d23.685000403725474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77f6ca617d5%3A0xafa59c9f5b1a0a4b!2sBangladesh!5e0!3m2!1sen!2sus!4v1696850220005!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MordenAndBeutiful;
