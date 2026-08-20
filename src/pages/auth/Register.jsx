import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useLocalStorage("users", []);
  const navigate = useNavigate();
  const handleShowPass = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setUser([...user, data]);

    toast.success("registrasi berhasil", { duration: 1500 });

    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center">
      <Toaster/>
      <div className="lg:hidden">
        <Logo className="text-black" />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-0.5 sm:gap-2">
          <h1 className="font-semibold text-lg sm:text-2xl lg:text-3xl">
            Create your account
          </h1>

          <p className="text-color-text text-xs sm:text-sm lg:text-base">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="flex w-full gap-2 sm:gap-3 text-color-text pt-3 sm:pt-6">
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg bg-white px-2 sm:px-4 py-1.5 sm:py-1.5 text-xs sm:text-base hover:bg-gray-50 transition"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg bg-white px-2 sm:px-4 py-1.5 sm:py-1.5 text-xs sm:text-base hover:bg-gray-50 transition"
          >
            Github
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 my-3 sm:my-5">
          <div className="flex-1 border-t border-gray-300" />

          <span className="text-gray-400 text-[10px] sm:text-xs whitespace-nowrap">
            or continue with email
          </span>
          <div className="flex-1 border-t border-gray-300" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 sm:gap-4"
        >
          <div className="flex flex-col gap-0.5 sm:gap-2">
            <label
              htmlFor="fullname"
              className="text-xs sm:text-sm font-medium"
            >
              Full Name
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              id="fullname"
              className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-1.5 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            {errors.fullName?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Full name is required
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-2">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
              Email address
            </label>
            <input
              {...register("email", {
                required: "email can't be empty",
                validate: (value) => {
                  const emailExist = user.some(
                    (user) => user.email.toLowerCase() === value.toLowerCase(),
                  );
                  return !emailExist || "email already exist";
                },
              })}
              type="email"
              id="email"
              className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-1.5 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-2">
            <label
              htmlFor="password"
              className="text-xs sm:text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "password can't be empty",
                  minLength: {
                    value: 8,
                    message: "password must be more than 8 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-1.5 pr-8 sm:pr-10 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <span
                onClick={handleShowPass}
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 cursor-pointer text-gray-500 w-4 sm:w-5 h-4 sm:h-5"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-xs sm:text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === getValues("password") || "password doesn't match",
                })}
                id="confirmPassword"
                className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-1.5 pr-8 sm:pr-10 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 cursor-pointer text-gray-500 w-4 sm:w-5 h-4 sm:h-5">
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="text-color-text flex gap-2 py-2">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required:
                  "please check the 'terms of service and privacy and policy' to proceed",
              })}
              required
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link className="text-primary">Terms of Service </Link>and{" "}
              <Link className="text-primary">Privacy and Policy</Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}
          <button
            type="submit"
            className="w-full px-3 py-1.5 sm:py-1.5 bg-primary rounded-lg text-white cursor-pointer hover:opacity-90 transition text-sm sm:text-base mt-1"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
