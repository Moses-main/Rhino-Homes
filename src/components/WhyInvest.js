// components/WhyInvestWithUs.jsx

import {
  FaMapMarkerAlt,
  FaChartPie,
  FaSeedling,
  FaHandsHelping,
  FaCoins,
  FaEye,
} from "react-icons/fa";

const WhyInvestWithUs = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt className="text-brick-red" />,
      title: "Prime Locations",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
    {
      icon: <FaChartPie className="text-brick-red" />,
      title: "Diverse Portfolio",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
    {
      icon: <FaSeedling className="text-brick-red" />,
      title: "Sustainable Development",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
    {
      icon: <FaHandsHelping className="text-brick-red" />,
      title: "Hassle Free Investing",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
    {
      icon: <FaCoins className="text-brick-red" />,
      title: "Proven Returns",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
    {
      icon: <FaEye className="text-brick-red" />,
      title: "Transparent Processes",
      description:
        "We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto my-10 ">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Invest With Us
          </h2>
          <p className="text-center ">
            Discover lucrative investment opportunities with Rhino Homes and
            Properties Ltd, your trusted partner in real estate. Our projects
            are strategically designed to maximize value, offering you the
            chance to grow your wealth through safe and reliable ventures in
            Nigeria’s dynamic real estate market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] m-auto">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 my-7 bg-white shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-center mb-4 relative">
                {/* Container with negative margin to position icon outside */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-14">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestWithUs;