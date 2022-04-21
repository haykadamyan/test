import React, { memo } from 'react';

function AppDownload() {
  return (
    <div className="w-full lg:px-8 md:px-10 sm:px-6 xs:px-4 sm:h-[597px] xs:mb-[50px]">
      <div className="xl:max-w-[1108px] mx-auto">
        <div className="mt-32 bg-blue-50 grid grid-cols-2 gap-8 rounded-2xl sm:flex sm:flex-col sm:relative sm:pt-[100px] sm:pb-[50px] md:pb-[50px]">
          <div className="px-12 pt-24 sm:order-2">
            <h2 className="text-secondary text-4xl mb-12 font-semibold sm:text-center">
              <span className="text-primary">Home Protection</span> <br className="sm:hidden"/>in your pocket. <br className="sm:hidden"/>Download the App
            </h2>
            <p className="text-gray-100 text-body2 font-normal mb-10 sm:text-center">
              Download the Title Guardian mobile App from the App Store or Google Play to make protecting your home even easier. Registration is simple, secure and fast.
            </p>
            <div className="flex flex-row sm:justify-center">
              <div>
                <img
                  src="/app-store.png"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <img
                  src="/googleplay.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="sm:order-1 sm:absolute sm:top-[-100px] sm:left-[calc(50%-125px)]">
            <div className="flex justify-center items-center h-full">
              <img
                className="w-full sm:w-[250px]"
                src="/mobile-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AppDownload);
