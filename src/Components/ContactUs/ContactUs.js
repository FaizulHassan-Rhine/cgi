import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-20 mb-20">
        <p className=" text-white  text-center border-b-2 border-b-shade-color text-4xl">
          Discuss your ambitions with us
        </p>
        <div className="flex flex-col mt-10 items-center">
          <p className=" text-white  ">
            Use our knowledge to get your organization ready for the future.{" "}
            <br />
            Contact our experts now for an introductory meeting.
          </p>
          <button className="bg-shade-color px-4 py-1 mt-6 font-semibold text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
