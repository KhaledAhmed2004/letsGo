import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaHiking,
  FaLandmark,
  FaMapMarkerAlt,
  FaMountain,
  FaStar,
  FaStarHalfAlt,
  FaTree,
  FaUtensils,
} from "react-icons/fa";

// Define the types for the params
interface Params {
  id: string;
  slagId: string;
}

// Define the component props type
interface DestinationDetailsPageProps {
  params: Params;
}
const DestinationDetailsPage: React.FC<DestinationDetailsPageProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://tour-gide-server.vercel.app/api/destinations/${params?.id}/${params?.slagId}`
  );
  const destination = await res.json();
  console.log(destination);
  return (
    <div className="font-sans">
      {/* Destination Overview with Image on the Right */}
      <section className="p-6 flex flex-col  justify-between bg-gray-100 rounded-lg mb-8">
        <div className="mt-6 md:mt-0 ">
          <Image
            src={"https://i.ibb.co/MMbcXqL/Mohamaya-lake.jpg"}
            alt="Destination"
            width={500} // Set the width of the image
            height={600} // Set the height of the image
            className="w-full h-[360px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2 text-blue-600">
            Beautiful Mohamaya lake
          </h2>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl flex items-center mr-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            </span>
            <p className="text-gray-700">(4.5 out of 5 stars)</p>
            <p className="text-blue-500 ml-4">(20 Reviews)</p>
          </div>

          <p className="text-gray-700 mb-4">
          Mohamaya Lake, located in Mirsarai, Chittagong, is a stunning man-made lake surrounded by hills and lush greenery. It offers a serene and peaceful escape for nature lovers, with activities such as boating, kayaking, and hiking. The crystal-clear water and scenic beauty make it a perfect spot for relaxation and adventure. Mohamaya Lake is becoming an increasingly popular destination for tourists seeking tranquility amidst nature.
          </p>

          <div className="bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-800">
              <strong>Phone:</strong> +8801735807444
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> info@touristExpress.com
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="p-6 bg-white rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaMountain className="text-blue-500 mr-2" /> Discover More Details
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Best Time to Visit</h3>
          <p className="text-gray-700">
            <FaCalendarAlt className="inline-block text-blue-500 mr-2" />
            <strong>November to February:</strong> The best time to visit Mohamaya Lake when the weather is cooler and more comfortable for outdoor activities and enjoying the lake’s scenic beauty.
          </p>

          <h3 className="text-xl font-semibold">Activities</h3>
          <p className="text-gray-700 flex items-center">
            <FaHiking className="text-green-500 mr-2" />
            <strong>Hiking:</strong> Enjoy scenic trails and immerse yourself in
            nature&apos;s beauty.
          </p>
          <p className="text-gray-700 flex items-center">
            <FaUtensils className="text-yellow-500 mr-2" />
            <strong>Local Cuisine:</strong> Savor regional dishes that reflect
            the rich flavors of the culture.
          </p>
        </div>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">How to Reach Mahamaya Lake</h2>

        <p>
          Mahamaya Lake is located about two kilometers east of Thakurdighi
          Bazaar in Mirsarai. So, no matter where you are coming from, you first
          need to reach Thakurdighi Bazaar in Mirsarai Upazila of Chittagong
          district.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">From Dhaka to Mahamaya Lake</h3>

        <p className="mb-4">
          <strong>By Bus from Dhaka:</strong> You can reach Thakurdighi Bazaar
          in Mirsarai by taking any Chittagong-bound bus from anywhere in Dhaka.
          Non-AC buses like S Alam, Shyamoli, Saudia, Unique, Hanif, Eagle, Ena,
          etc., charge around 450-500 BDT. AC buses such as Green Line, Saudia,
          Sohag, and TR cost around 1000-1200 BDT. You can choose any of these
          buses and get off at Thakurdighi Bazaar, just before reaching
          Mirsarai. Alternatively, you can take the Star Line bus from Sayedabad
          Bus Stand to Feni (fare 320 BDT) and then take a local bus to reach
          Thakurdighi Bazaar for 30-50 BDT.
        </p>

        <p>
          From Thakurdighi, you can reach the main gate of Mahamaya Eco Park by
          CNG (auto-rickshaw) for 20 BDT per person. Alternatively, you can rent
          a CNG for 80-150 BDT to reach Mahamaya Eco Park directly. Inside this
          eco park, you will find the beautiful Mahamaya Lake.
        </p>

        <p className="mb-4">
          <strong>By Train from Dhaka:</strong> To reach Mahamaya Lake by train,
          take any intercity train from Dhaka heading towards Chittagong and get
          off at Feni Station. The train fare varies from 250 to 1035 BDT per
          person depending on the class. From Feni Station, you can take a
          rickshaw or auto for 10-15 BDT to reach the Feni Mohipal Bus Stand.
          From there, take a local bus (fare 30-40 BDT) and get off at
          Thakurdighi Bazaar, just before reaching Mirsarai. Alternatively, if
          you take a mail train with a fare of 90-120 BDT, you can get off at
          Chinki Astana Station. From there, take an auto, leguna, or CNG for
          20-25 BDT to reach Thakurdighi.
        </p>

        <p>
          From Thakurdighi, you can reach the main gate of Mahamaya Eco Park by
          CNG for 15-20 BDT per person. Alternatively, you can reserve a CNG for
          80-120 BDT to directly reach Mahamaya Eco Park. Inside this eco park,
          you will find the beautiful Mahamaya Lake.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">
          From Chittagong to Mahamaya Lake
        </h3>

        <p className="mb-4">
          From the Madarbari and Kadamtali bus stops in Chittagong, you can find
          buses, CNGs (auto-rickshaws), and microbuses heading towards Mirsarai.
          Additionally, you can take a direct Choice bus from Madarbari in
          Chittagong city to Thakurdighi Bazaar for a fare of 80 BDT.
          Alternatively, you can reach Thakurdighi from Alankar City Gate in
          Chittagong by taking local buses, with fares ranging from 40 to 60
          BDT.
        </p>

        <p>
          From Thakurdighi, you can reach the main gate of Mahamaya Eco Park by
          CNG for 15-20 BDT per person. Alternatively, you can reserve a CNG for
          80-150 BDT to directly reach Mahamaya Eco Park. Inside this eco park,
          you will find the beautiful Mahamaya Lake.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">From Sylhet</h3>

        <p className="mb-4">
          You can travel from Sylhet by bus or train. For buses heading towards
          Chittagong, you will need to get off at Thakurdighi Bazaar, just
          before Mirsarai. If you prefer to travel by train, you can take the
          intercity trains like Paharika Express or Udayan Express, or the mail
          train Jalalabad Express, and get off at Feni Station. From there, take
          a rickshaw or auto for 20-25 BDT to reach the Feni Mohipal Bus Stand.
        </p>

        <p className="mb-4">
          From the bus stand, take a local bus for a fare of 30-50 BDT to reach
          Thakurdighi Bazaar. Alternatively, if you travel by mail train for a
          fare of 100-150 BDT, you can get off at Chinki Astana Station. From
          there, you can take an auto, leguna, or CNG for 20-25 BDT to reach
          Thakurdighi. From Thakurdighi, you can reach the main gate of Mahamaya
          Eco Park by CNG for 15-20 BDT per person or reserve a CNG for 100-120
          BDT to directly reach Mahamaya Eco Park. Inside the park, you will
          find the beautiful Mahamaya Lake.
        </p>

        <p className="font-semibold">
          <strong>Ticket Price</strong>: To enter Mahamaya Eco Park, there is an
          entry fee of 10 BDT per person.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Kayaking and Boat Trip Costs
        </h2>

        <p className="mb-4">
          You can enjoy kayaking on the lake. Each kayak can accommodate two
          people. The rental cost for kayaking is 300 BDT per hour, and 200 BDT
          for 30 minutes. Students can avail a discount, making it 200 BDT per
          hour and 150 BDT for 30 minutes. Kayaking is available from 9:00 AM to
          5:30 PM.
        </p>

        <p className="mb-4">
          For exploring the lake, engine boats are also available. A boat that
          can carry 8-10 people costs between 800-1000 BDT per hour, including a
          tour around nearby waterfalls. For larger groups of 15-20 people,
          renting an engine boat costs 1200-1500 BDT per hour.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Food Arrangements</h2>

        <p className="mb-4">
          There are no food facilities inside the park, so you need to bring
          your own food. However, you can find small local restaurants in
          Thakurdighi Bazaar where you can enjoy traditional Bangladeshi meals.
          For more options, you can head to Mirsharai or Sitakunda Bazaar, where
          you’ll find a few decent restaurants to have a meal.
        </p>

        <p className="mb-4">
          Al Amin Hotel, located in front of the Sitakunda Municipality, is
          well-known for its quality food.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Where to Stay</h2>

        <p className="mb-4">
          There are no high-quality hotels in Mirsharai itself. However, you can
          find a few basic options in nearby Sitakunda. Hotel Saudia offers
          rooms ranging from 600 to 1600 BDT, while other hotels like Saimun
          provide accommodations for 300 to 700 BDT. For booking at Hotel
          Saudia, you can call
          <a
            href="tel:01991-787979"
            className="text-blue-500 hover:underline ml-1"
          >
            01991-787979
          </a>{" "}
          or
          <a
            href="tel:01816-518119"
            className="text-blue-500 hover:underline ml-1"
          >
            01816-518119
          </a>
          .
        </p>

        <p className="mb-4">
          For better accommodation, it is advisable to stay in Chattogram city,
          which is about a 1 hour 30 minutes drive from Mirsharai. You can find
          reasonably priced hotels around Alankar Mor or near New Market in
          Station Road area, offering a variety of options for a comfortable
          stay.
        </p>
      </section>

      {/* Map Location */}
      <section className="p-6 flex flex-col bg-white rounded-lg mb-8">
        {/* Top: Map */}
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className="w-full h-64 rounded-lg shadow-md"
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
        {/* Bottom: Location Details */}
        <div className="mt-4 pr-4">
          <h2 className="text-2xl font-bold mb-4">
            <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
            Location
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Destination Lane, City, Country
          </p>
          <p className="text-gray-700 mb-4">
            This beautiful destination is located in the heart of the city,
            making it easily accessible. Surrounded by stunning landscapes and
            rich cultural sites.
          </p>
          <h3 className="text-xl font-semibold mb-2">Nearby Attractions:</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li>
              <FaLandmark className="inline-block text-gray-500 mr-2" />
              Famous Museum (1.5 miles)
            </li>
            <li>
              <FaTree className="inline-block text-green-500 mr-2" />
              City Park (2 miles)
            </li>
            <li>
              <FaLandmark className="inline-block text-gray-500 mr-2" />
              Historical Landmark (3 miles)
            </li>
          </ul>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="p-6 bg-white rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="border p-4 rounded-lg mb-4">
          <p className="text-gray-700">
            &quot;This was the best vacation ever! The scenery was breathtaking
            and the tour was well-organized.&quot; - Jane Doe
          </p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="text-gray-700">
            &quot;An unforgettable experience. The local cuisine was delightful,
            and the guides were knowledgeable.&quot; - John Smith
          </p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailsPage;
