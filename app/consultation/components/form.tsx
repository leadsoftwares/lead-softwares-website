"use client";
import api from "@/lib/axios-config";
import { CheckCircle, ChevronDown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import RegionSelector from "./countrySelector";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  industry: string;
  hearFrom: string;
  budget: string;
  region: string;
  company: string;
  details: string;
};

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const budgets = ["$1000 - $5000", "$5000 - $10000", "More than $10000"];
  const hearFromOptions = [
    "Google",
    "LinkedIn",
    "Referral",
    "Social Media",
    "Others",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node),
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted:", data);
    setIsLoading(true);

    await api
      .post("api/v1/quote-request", data)
      .then(() => {
        setIsLoading(false);
        setShowSuccess(true);
        reset();
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error submitting form:", error);
      });
  };

  const Dropdown = ({
    label,
    name,
    options,
    index,
  }: {
    label: string;
    name: keyof FormData;
    options: string[];
    index: number;
  }) => (
    <div className="relative">
      <label className="text-text">{label}</label>
      <input
        type="text"
        {...register(name, { required: `${label} is required` })}
        readOnly
        placeholder="Select..."
        onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
        className="w-full border border-[#e2e8f0] rounded-md p-2 cursor-pointer bg-white"
      />
      <ChevronDown
        className="absolute right-3 top-9 text-gray-500 pointer-events-none"
        size={18}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
      <ul
        ref={(el) => {
          if (el) dropdownRefs.current[index] = el;
        }}
        className={`absolute w-full top-16 mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10 ${
          openDropdown === name ? "" : "hidden"
        }`}
      >
        {options.map((opt, i) => (
          <li
            key={i}
            onClick={() => {
              setValue(name, opt, { shouldValidate: true });
              setOpenDropdown(null);
            }}
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:relative lg:bottom-20 lg:max-w-[60%] rounded-xl shadow-xl lg:mx-auto lg:mb-40 py-10 px-6 lg:px-10 z-100 bg-white"
    >
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center w-75">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Form Submitted!
            </h3>
            <p className="text-gray-600 mb-4">
              Your consultation request has been saved.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl text-primary font-semibold text-center pb-10">
        Schedule a Free Consultation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-text">First Name</label>
          <input
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "First name can only contain letters and spaces",
              },
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
            })}
            type="text"
            placeholder="First Name"
            onKeyDown={(e) => {
              if (
                !/[a-zA-Z\s]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
            className="border border-[#e2e8f0] rounded-md p-2"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-text">Last Name</label>
          <input
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Last name can only contain letters and spaces",
              },
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
              },
            })}
            type="text"
            placeholder="Last Name"
            onKeyDown={(e) => {
              if (
                !/[a-zA-Z\s]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
            className="border border-[#e2e8f0] rounded-md p-2"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-text">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Email"
            className="border border-[#e2e8f0] rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-text">Phone</label>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: "Phone number is required",
              minLength: { value: 6, message: "Phone number is too short" },
            }}
            render={({ field }) => (
              <PhoneInput
                containerClass="flex w-full rounded-md border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-primary/30 overflow-hidden"
                inputClass="!w-full !border-none !outline-none !shadow-none !rounded-none p-5 text-sm text-gray-900 placeholder-[#B8B8B8]"
                buttonClass="!border-none !border-r !border-[#e2e8f0] !bg-gray-50 hover:!bg-gray-100 !rounded-none"
                country="pk"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-8">
          <label className="text-text">Region</label>
          <Controller
            control={control}
            name="region"
            rules={{ required: "Region is required" }}
            render={({ field }) => (
              <RegionSelector value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.region && (
            <p className="text-red-500 text-sm">{errors.region.message}</p>
          )}
        </div>
        <div className="space-y-8">
          <div className="mt-0">
            <Dropdown
              label="How did you hear about us?"
              name="hearFrom"
              options={hearFromOptions}
              index={0}
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="mt-0 flex flex-col">
            <label className="text-text">Industry</label>
            <input
              {...register("industry", { required: "Industry is required" })}
              type="text"
              placeholder="e.g. IT, Healthcare, Solar"
              className="border border-[#e2e8f0] rounded-md p-2"
            />
            {errors.industry && (
              <p className="text-red-500 text-sm">{errors.industry.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-text">Company</label>
          <input
            {...register("company")}
            type="text"
            placeholder="Enter your company name"
            className="border border-[#e2e8f0] rounded-md p-2"
          />
        </div>
      </div>

      <div className="pt-6">
        <label className="text-text">Project Details</label>
        <textarea
          {...register("details", {
            required: "Project details are required",
            minLength: {
              value: 10,
              message: "Please provide more details (at least 10 characters)",
            },
          })}
          className="w-full border border-[#e2e8f0] rounded-md p-2 h-24 resize-none"
          placeholder="Please describe your project details..."
        />
        {errors.details && (
          <p className="text-red-500 text-sm">{errors.details.message}</p>
        )}
      </div>
      <Dropdown
        label="Estimated Budget"
        name="budget"
        options={budgets}
        index={2}
      />

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-purple-900 cursor-pointer"
          } text-white font-light py-3 px-6 rounded-md transition mr-4 flex items-center gap-2`}
        >
          {isLoading && <Loader className="h-4 w-4 animate-spin" />}
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ConsultationForm;
