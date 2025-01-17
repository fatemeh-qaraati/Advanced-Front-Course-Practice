import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import { STORAGE_CONTACT_INFO } from "../constant";

const ContactUS = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),

    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    localStorage.setItem(STORAGE_CONTACT_INFO, JSON.stringify(data));
    setFormData(data);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div>
        <div
          className="bg-cover bg-center h-80 opacity-90"
          style={{ backgroundImage: "url('/images/Contact-Us.jpg')" }}
        ></div>

        <div className="flex justify-center px-4 py-10 flex-col md:flex-row">
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/3">
            <div className="border border-blue-900 p-4 flex items-center space-x-2 bg-sky-50 flex-col justify-center">
              <i className="fas fa-envelope text-3xl text-blue-900" />
              <div className="text-center mt-2 text-sm sm:text-base">
                <h5 className="font-bold">Email</h5>
                <p>Luxe.Haven@gmail.com</p>
              </div>
            </div>

            <div className="border border-blue-900 p-4 flex items-center space-x-2 bg-sky-50 flex-col justify-center">
              <i className="fas fa-phone text-3xl text-blue-900" />
              <div className="text-center mt-2 text-sm sm:text-base">
                <h5 className="font-bold">Phone</h5>
                <p>+011 (129) 326-4920</p>
              </div>
            </div>

            <div className="border border-blue-900 p-4 flex items-center space-x-2 bg-sky-50 flex-col justify-center">
              <i className="fab fa-whatsapp text-3xl text-blue-900" />
              <div className="text-center mt-2 text-sm sm:text-base">
                <h5 className="font-bold">WhatsApp</h5>
                <p>+1 235 547 891</p>
              </div>
            </div>

            <div className="border border-blue-900 p-4 flex items-center space-x-2 bg-sky-50 flex-col justify-center">
              <i className="fas fa-map-marker-alt text-3xl text-blue-900" />
              <div className="text-center mt-2 text-sm sm:text-base">
                <h2 className="font-bold text-sm ">Address</h2>
                <p>730 New York Avenue, Troy, TX</p>
              </div>
            </div>
          </div>

          <div className="mt-2 w-full lg:w-1/3 md:ml-3 md:mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white border border-blue-950 p-6 shadow-xl rounded-lg"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-blue-800 mb-1"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-blue-800 mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-blue-800 mb-1"
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-blue-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-800 text-white py-2 px-4 rounded text-base hover:bg-blue-950"
              >
                Send Now
              </button>
            </form>

            {formData && (
              <div className="mt-2 text-green-500">
                Thank you for contacting us!
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUS;