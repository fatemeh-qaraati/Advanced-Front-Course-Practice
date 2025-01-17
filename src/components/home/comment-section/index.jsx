import React from "react";
import useFetch from "../../../Hook/useFetch.js";
import Loading from "../../loading/index.jsx";

const UserComments = () => {
  const { data: comments, loading, error } = useFetch("/userCommentData.json");

  if (loading) {
    return (
      <Loading isLoading={loading}>
        <p>Loading user comments...</p>
      </Loading>
    );
  }

  if (error) return <p>Error loading comments: {error}</p>;

  return (
    <section className="py-10">
      <div className="mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-950">
            What Our Users Say
          </h3>
          <p className="text-gray-700 mt-2">
            See what people are saying about Hotel's services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mx-auto w-3/4">
          {comments.map((user) => (
            <div
              key={user.id}
              className="bg-blue-50 border-2 border-blue-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={user.photo}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h4 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h4>

              <p className="text-gray-700 text-sm mt-2">{user.comment}</p>

              <div className="flex items-center justify-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl ${
                      index < user.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserComments;