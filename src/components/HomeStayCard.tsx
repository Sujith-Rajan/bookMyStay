import Image from "next/image";

export default function HomeStayCard() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <Image
        src="/hs1.jpg"
        alt="Kerala Tropical Homestay"
        width={1200}
        height={600}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Kerala Tropical Homestay
        </h2>
        <p className="mt-3 text-gray-600">
          Experience the charm of Kerala’s tropical climate in our serene
          homestay. Surrounded by lush greenery
          and spacious interiors, this home offers the perfect blend of comfort
          and heritage. Enjoy peaceful mornings, authentic Kerala hospitality,
          and a refreshing stay amidst nature.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Image
            src="/hs3.jpg"
            alt="Front Yard View"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
           <Image
            src="/hs2.jpg"
            alt="Cozy Bedroom"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
