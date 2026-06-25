import {
  FaMapMarkerAlt,
  FaPlane,
  FaCompass,
  FaStar,
} from "react-icons/fa";
function Home() {
  const destinations = [
    {
      title: "Bali",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      country: "Indonesia",
    },
    {
      title: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      country: "France",
    },
    {
      title: "Maldives",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      country: "Maldives",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Navbar */}

      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-3xl font-bold text-blue-600">
            TravelGo
          </h1>

          <div className="space-x-8 font-medium hidden md:flex">
            <a href="#">Home</a>
            <a href="#">Destinations</a>
            <a href="#">Packages</a>
            <a href="#">About</a>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Book Now
          </button>

        </div>
      </nav>

      {/* Hero */}

      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center">

          <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
              Explore <br />
              The World
            </h1>

            <p className="text-gray-200 text-xl mt-6 max-w-xl">
              Discover breathtaking destinations, unforgettable
              experiences, and affordable travel packages.
            </p>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Exploring
            </button>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaPlane className="text-blue-600 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">
              Flight Booking
            </h3>
            <p>
              Best flight deals across the globe.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaCompass className="text-green-600 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">
              Guided Tours
            </h3>
            <p>
              Professional travel guides for every destination.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaStar className="text-yellow-500 text-5xl mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">
              Premium Hotels
            </h3>
            <p>
              Stay at the world's best luxury hotels.
            </p>
          </div>

        </div>

      </section>

      {/* Popular Destinations */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {destinations.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="flex items-center mt-2 text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    {item.country}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;