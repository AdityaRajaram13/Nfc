import React from 'react';
import CardImage from '../assets/CardDesign/Approved.svg';

const ProfileCard = ({ name, jobTitle, company, contactDetails }) => {
  return (
    <div className="  flex justify-center">
      <div style={{ backgroundColor: "#111536" }}>
        <div className=" w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
          <img
            className="relative object-cover w-full h-full rounded-xl"
            // src="https://i.imgur.com/kGkSg1v.png"
            src={CardImage}
            alt="Card Background"
          />
          <div className="w-full px-6 py- absolute top-6">
            <div className="flex items-center space-x-4 ">
            <div className="font-medium  text-xs mb-1">Name</div>
            <div className="font-medium  tracking-widest text-sm mb-2">{name}</div>
            </div>
            <div className="pt-2 flex items-center space-x-4 ">
            <div className="font-medium text-xs mb-1">Company</div>
            <div className="font-medium tracking-wider text-sm">{company}</div>
            </div>
            <div className="pt-2 flex items-center space-x-4">
              <div className="font-medium text-xs mb-1">Job Title</div>
              <div className="font-medium tracking-wider text-sm">{jobTitle}</div>
            </div>
            <div className="pt-2 flex items-center space-x-4">
              <div className="font-medium text-xs mb-1">Contact</div>
              <div className="font-medium tracking-wider text-sm">{contactDetails}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
