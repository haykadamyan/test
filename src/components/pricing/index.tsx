import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
import { CheckIcon } from '@heroicons/react/outline';

import 'swiper/css';
import 'swiper/css/autoplay';

const pricing = {
  tiers: [
    {
      title: 'Starter',
      price: 29.99,
      description: 'Annual Subscription',
      features: ['24/7 activity monitoring', 'FREE copy of your title deeds', 'Full 24hr support package', 'Unlimited joint Guardians', 'Property valuation tracking', 'Less than £2.50 per month'],
      cta: 'Purchase',
      mostPopular: true,
    },
    {
      title: 'Portfolio',
      price: 19.99,
      description: 'Covers 5+ Properties',
      features: [
        '24/7 activity monitoring',
        'Protects your Portfolio',
        'FREE copy of your title deeds',
        'Full 24hr support package',
        'Unlimited joint Guardians',
        'Property valuation tracking',
      ],
      cta: 'Contact Us',
      mostPopular: false,
    },
    {
      title: 'Lifetime',
      price: 199.99,
      description: 'Homeowner life term Plan',
      features: [
        'FREE copy of your title deeds',
        'FREE copy of your title deeds',
        'Full 24hr support package',
        'Unlimited joint Guardians',
        'Transfers when you move home',
        'Property valuation tracking',
      ],
      cta: 'Contact Us',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Pricing() {
  return (
    <div className="w-full lg:px-8 md:px-10 sm:px-6 xs:px-4 xs:mt-[70px] sm:mt-[-100px]">
      <div className="xl:max-w-[1108px] mx-auto">
        <div className="pt-32 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="text-center">
            <p className="mt-2 text-4xl font-semibold text-secondary">
              <span className="text-primary">Title Guardian</span> Pricing
            </p>
            <p className="mt-4 max-w-lg mx-auto font-normal text-subtitle1 text-gray-100">
              There are 3 subscription plans to suit your personal circumstances. Select your required plan and start below.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-0 grid grid-cols-3 gap-x-8 sm:hidden">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative bg-white border border-blue-50 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                {tier.mostPopular && (
                  <p className="absolute top-0 right-6 py-1.5 px-4 bg-primary rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    popular
                  </p>
                )}

                <div className="bg-blue-50 p-8 rounded-t-2xl text-center">
                  <h3 className="text-price text-primary font-medium">
                    ${tier.price}
                  </h3>
                  <p className="text-secondary text-price-label mt-2">
                    {tier.title} Plan
                  </p>
                  <p className="mt-2 text-gray-50 text-body2">{tier.description}</p>
                </div>

                <ul role="list" className="px-6 my-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 text-primary" aria-hidden="true" />
                      <span className="ml-3 text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 pb-8">
                  <a
                   href="#"
                   className={classNames(
                     tier.mostPopular
                       ? 'bg-primary text-white hover:border-2 hover:border-primary hover:text-black hover:bg-white'
                       : 'border-2 border-primary text-secondary',
                     'block w-full py-3 px-6 border rounded-md text-center font-medium hover:bg-primary hover:text-white transition'
                   )}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:hidden lg:hidden xl:hidden sm:block text-center mt-[40px]">
          <Swiper
              spaceBetween={50}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              slidesPerView={1}
              modules={[Autoplay]}
          >
            {pricing.tiers.map((tier) => (
                <SwiperSlide key={tier.title}>
                  <div
                      className="relative bg-white border border-blue-50 rounded-2xl shadow-sm flex flex-col"
                  >
                    <div className="flex-1">
                      {tier.mostPopular && (
                          <p className="absolute top-[20px] right-6 py-1.5 px-4 bg-primary rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                            popular
                          </p>
                      )}

                      <div className="bg-blue-50 p-8 rounded-t-2xl text-center">
                        <h3 className="text-price text-primary font-medium">
                          ${tier.price}
                        </h3>
                        <p className="text-secondary text-price-label mt-2">
                          {tier.title} Plan
                        </p>
                        <p className="mt-2 text-gray-50 text-body2">{tier.description}</p>
                      </div>

                      <ul role="list" className="px-6 my-8 space-y-4">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex">
                              <CheckIcon className="flex-shrink-0 w-6 h-6 text-primary" aria-hidden="true" />
                              <span className="ml-3 text-gray-200">{feature}</span>
                            </li>
                        ))}
                      </ul>
                      <div className="px-6 pb-8">
                        <a
                            href="#"
                            className={classNames(
                                tier.mostPopular
                                    ? 'bg-primary text-white hover:border-2 hover:border-primary hover:text-black hover:bg-white'
                                    : 'border-2 border-primary text-secondary',
                                'block w-full py-3 px-6 border rounded-md text-center font-medium hover:bg-primary hover:text-white transition'
                            )}
                        >
                          {tier.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default memo(Pricing);
