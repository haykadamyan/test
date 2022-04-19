import React, { memo } from 'react';

function RegisterProperty() {
  return (
    <div className="w-full lg:px-8 md:px-10 sm:px-6 xs:px-4 mt-20">
      <div className="xl:max-w-[1108px] mx-auto">
        <div className="relative py-64 px-8 overflow-hidden lg:px-16">
          <div className="absolute inset-0">
            <img
              src="/family.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <div className="max-w-lg mx-auto mt-6 text-white text-center">
              <p className="text-3xl font-medium">
                Relax and enjoy your time with those you love and take comfort knowing we have you protected
              </p>
              <button className="mt-4 px-8 py-4 rounded-full text-body1 font-medium bg-white-opacity text-white">
                Register My Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RegisterProperty);
