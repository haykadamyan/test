import React, { memo } from 'react';

function AppDownload() {
  return (
    <div className="w-full lg:px-8 md:px-10 sm:px-6 xs:px-4">
      <div className="xl:max-w-[1108px] mx-auto">
        <div className="mt-32 bg-blue-50 grid grid-cols-2 gap-8 rounded-2xl ">
          <div className="px-12 pt-24">
            <h2 className="text-secondary text-4xl mb-12 font-semibold">
              <span className="text-primary">Home Protection</span> <br/>in your pocket. <br/>Download the App
            </h2>
            <p className="text-gray-100 text-body2 font-normal mb-10">
              Download the Title Guardian mobile App from the App Store or Google Play to make protecting your home even easier. Registration is simple, secure and fast.
            </p>
            <div className="flex flex-row">
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
          <div>
            <div className="">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full"
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
