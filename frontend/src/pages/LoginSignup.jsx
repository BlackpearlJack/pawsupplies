import images from "../constants/images";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="sm:block hidden relative w-full md:w-1/2 h-full flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-light-grayish-red font-extrabold my-2">One-Stop Shop for Pet Essentials</h1>
          <p className="text-base text-light-grayish-red font-normal">Looking for top-quality products to pamper your furry friends? Look no further!</p>
        </div>
        <img src={images.login_image} alt="" className="hidden md:block w-full h-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 h-full bg-[#fffff] items-center flex flex-col p-8 md:p-20 justify-between">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-gray-blue font-semibold">Pawsupplies</h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-8 md:mb-10">
            <h3 className="text-2xl text-dark-magenta font-semibold mb-2">Login</h3>
            <p className="text-sm mb-2 text-dark-magenta">Welcome back! Please Enter your Details</p>
          </div>

          <div className="w-full flex flex-col mb-8 md:mb-0">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-dark-magenta py-2 my-2 bg-none border-b border-gray-blue outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full text-dark-magenta py-2 my-2 bg-none border-b border-gray-blue outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between mb-8 md:mb-0">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm text-dark-magenta">I agree to the terms and conditions</p>
            </div>

            <p className="text-sm text-dark-magenta hover:text-magenta font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password ?</p>
          </div>

          <div className="w-full flex flex-col items-center">
            <button className="w-full md:w-full my-2 font-semibold text-[white] bg-dark-green rounded-md p-4 text-center flex items-center justify-center">
              Login
            </button>
            <button className="w-full md:w-full my-2 font-semibold text-gray-blue border-2 border-dark-magenta bg-[white] rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-4 md:mt-0">
          <p className="text-sm font-normal text-magenta">Do not have an account?  <span className="font-semibold underline underline-offset-2 cursor-pointer">Sign up for free</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
