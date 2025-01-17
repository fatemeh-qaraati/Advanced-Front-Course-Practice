import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
    clearMessage();
  };

  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest news, offers, and exclusive promotions.
          Sign up now!
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />

          <button
            type="submit"
            onClick={handleSubscribe}
            className="px-6 py-2 bg-blue-950 text-white rounded-md shadow-md hover:bg-blue-800 transition-all"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("Thank") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;