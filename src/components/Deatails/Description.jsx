import React from "react";
import { RxCross2 } from "react-icons/rx";

const Description = (props) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-3/5 sm:max-w-screen-md">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="cursor-pointer">
                    <RxCross2
                      size={20}
                      onClick={() => {
                        props.show.setShow(false);
                      }}
                    />
                  </div>

                  <h3
                    className="font-semibold leading-6 text-gray-900 text-3xl my-8"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg text-gray-500">
                      Welcome to Orchard Farm, a stunning family-friendly and
                      pet-friendly luxury farmhouse just 45 minutes from Delhi
                      and Gurgaon, this farmhouse offers a tranquil escape for
                      you and your loved ones with exclusive amenities like a
                      private pool and Jacuzzi.
                      <br />
                      <br />
                      It is a perfect place for getaways near Delhi and Gurgoan
                      with friends and family and also an ideal choice for
                      pre-wedding shoots, corporate events, destination weddings
                      and parties.
                    </p>
                  </div>
                  <div></div>
                  <h3
                    className="font-semibold leading-6 text-gray-900 text-2xl my-4"
                    id="modal-title"
                  >
                    The space
                  </h3>
                  <div className="mt">
                    <p className="text-lg text-gray-500">
                      Property Overview: Immerse yourself in the tranquility of
                      our 2.5-acre farmhouse located within a 45-minute reach of
                      Delhi NCR. With three opulent bedrooms, our property sets
                      the stage for family reunions, work retreats, or quiet
                      escapes. within 45 minutes from Gurgoan. The wrap-around
                      porch lets you enjoy the fresh air in the stillness, while
                      an outdoor bar is perfect for entertaining guests. With a
                      wrap- around porch and huge lawns to soak in the fresh
                      pristine air and enjoy the stillness, you can be sure that
                      you will not miss home. Enjoy leisurely walks in the
                      evening, with the cool breeze brushing right across your
                      hair. Enjoy the amazing Sun kissed afternoons in the
                      winters, or make your evenings special with our outdoor
                      barbeque. Living & Dining Space: Relish the sprawling
                      living and dining area for memorable gatherings and meals.
                      The wrap-around porch offers a serene spot to breathe in
                      the fresh air and take in the tranquility of nature.
                      Bedrooms: Our farmhouse houses three luxurious bedrooms,
                      all equipped with: Comfortable beds for restful sleep.
                      Jacuzzi in the Master Bedroom . Attached bathrooms for
                      privacy and convenience. Large windows overlooking the
                      verdant lawns. Storage cupboards to keep your belongings
                      organized. Side tables for added functionality. Heaters to
                      keep you warm during winters. Outdoor Amenities: Whether
                      it's entertaining at the outdoor bar, hosting a barbecue,
                      or simply lounging on the vast lawns, outdoor enjoyment is
                      just a step away. Activities: Dive into the newly-built
                      swimming pool, challenge someone to a badminton match, go
                      for a tranquil walk, or gather around the bonfire on
                      chilly nights. For indoor fun, we have a foosball table,
                      carom board, and a music system. Dining: Our in-house chef
                      stands ready to impress with delightful dishes from our
                      kitchen. If you prefer self-catering, our fully-equipped
                      kitchen is at your disposal. Check-in & Check-out: Present
                      valid ID at check-in. Note that a maximum of 14 guests can
                      stay at the property. A refundable security deposit of INR
                      5000 is required 24 hours prior to check-in. Additional
                      Information: Narcotics are strictly prohibited. Smoking is
                      allowed in designated areas. Please maintain cleanliness.
                      Extra mattresses are available. Guests are liable for any
                      damage or illegal activities. Food delivery services are
                      unavailable in this region. Arrangements for driver
                      accommodations and pet allowances can be made for
                      additional charges. Guest access The entire farmhouse will
                      be available to the guests. Please note that the pricing
                      mentioned is for the entire place (not per room!).
                      <br />
                      <br />
                      It is a perfect place for getaways near Delhi and Gurgoan
                      with friends and family and also an ideal choice for
                      pre-wedding shoots, corporate events, destination weddings
                      and parties.
                    </p>
                  </div>
                  <h3
                    className="font-semibold leading-6 text-gray-900 text-3xl my-8"
                    id="modal-title"
                  >
                    Guest access
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg text-gray-500">
                      The entire farmhouse will be available to the guests.
                      Please note that the pricing mentioned is for the entire
                      place (not per room!). Other things to note -There shall
                      be additional charges of INR 1000 per visitor, and the
                      gathering should not exceed twenty-five people. -The
                      visitors are not allowed to spend the night at the
                      property and must leave by 11:00 pm. After 11 pm the
                      visitors will be charged for their stay 1500/head.
                      -There'll be an additional charge of INR 5,000 per day for
                      hiring our cook to prep your meals. Alternatively, you can
                      cook in the fully equipped kitchen by adding INR 3,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
