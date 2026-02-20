import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingH from "./LoadingH";
import { toast } from "react-toastify";

type FormFields = {
  name: string;
  email: string;
  serviceType: string;
  message: string;
};

const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setLoading(true);
    axios
      .post("/api/hire/me", data)
      .then((res) => {
        setLoading(false);
        if (res.data.message === "message sent") {
          toast.success("message sent");
          reset();
        } else {
          toast.error("Message could not be sent, please try again");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (loading) {
      document.body.classList.add("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [loading]);

  return (
    <form
      className="flex flex-col md:w-[30%] w-[90%] mx-auto min-h-100 h-fit mb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading && <LoadingH />}
      <input
        {...register("name", {
          required: "name is required",
          validate: (value) => {
            const valueNoSpace = value.replaceAll(" ", "");
            if (valueNoSpace.length > 0) {
              return true;
            }
            return "enter a valid name ";
          },
        })}
        type="text"
        placeholder="Name"
        className="bg-black/10 my-3 px-3 text-sm rounded-lg h-12 focus:outline-none focus:border-green-500"
      />
      {errors.name && (
        <div className="text-red-500 font-thin text-sm px-2">
          {errors.name?.message}
        </div>
      )}
      <input
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "please enter a valid email adress",
          },
        })}
        placeholder="Email"
        className="bg-black/10 my-3 px-3 text-sm rounded-lg h-12 focus:outline-none focus:border-green-500"
      />
      {errors.email && (
        <div className="text-red-500 font-thin text-sm px-2">
          {errors.email?.message}
        </div>
      )}
      <select
        {...register("serviceType", {
          required: "Srvice type is required",
        })}
        className="bg-black/10 my-1 px-3 text-sm rounded-lg h-12 focus:outline-none focus:border-green-500"
      >
        <option value="Buy Beat">Buy Beat</option>
        <option value="collaboration">Collaboration</option>
        <option value="Mix/mastering">Mix/mastering</option>
      </select>
      {errors.serviceType && (
        <div className="text-red-500 font-thin text-sm px-2">
          {errors.serviceType?.message}
        </div>
      )}
      <textarea
        {...register("message", {
          required: "message is required",
        })}
        placeholder="Message"
        className="bg-black/10 my-3 p-3 text-sm rounded-lg h-30 focus:outline-none focus:border-green-500"
      />
      {errors.message && (
        <div className="text-red-500 font-thin text-sm px-2">
          {errors.message?.message}
        </div>
      )}
      <button
        type="submit"
        className="flex cursor-pointer transition-all duration-500 ease-in justify-center items-center my-3 rounded-lg hover:rounded-[8em] h-13 bg-yehuda-black text-white"
      >
        Send mail
      </button>
    </form>
  );
};

export default HireMe;
