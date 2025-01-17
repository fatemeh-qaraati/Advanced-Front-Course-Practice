import React from "react";
import useFetch from "../../../Hook/useFetch";
import Loading from "../../loading/index.jsx";

const RecommendSection = () => {
  const {
    data: recommendations,
    loading,
    error,
  } = useFetch("/recommendData.json");

  if (loading) {
    return (
      <Loading isLoading={loading}>
        <p>recommendation section is loading...</p>
      </Loading>
    );
  }

  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <section style={{ "backgroundColor": "#F2F9FF" }} className="py-10">
      <div className="mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-950 ">
            Recommend for You
          </h2>
          <p className="text-gray-700 mt-2 tesx-sm">
            Exclusive suggestions carefully chosen for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-950">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Beds</span>
                    <span className="text-sm text-blue-900">{item.beds}</span>
                  </div>

                  <div className="flex justify-between border-t-2 border-gray-200 border-b-2 py-2">
                    <span className="text-sm text-gray-600">Max Guests</span>
                    <span className="text-sm text-blue-900">
                      {item.maxGuests}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Other Option</span>
                    <span className="text-sm text-blue-900">
                      {item.otherOption}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;