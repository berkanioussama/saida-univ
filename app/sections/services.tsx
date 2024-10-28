import { Meteors } from "@/components/ui/meteors";

const Services = () => {
  return (
    <div className="flex flex-col gap-24">
      <h2 className="text-5xl font-bold text-white text-center">Our Services</h2>
      <div className="flex gap-16 justify-center">
        <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
  
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Guest Lectures

            </h1>
  
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Expand your knowledge with our engaging lectures led by industry experts and experienced speakers. Covering a wide range of topics from emerging technologies to career development, these sessions provide valuable insights and inspiration to help you succeed in the tech world
            </p>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        </div>
        <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
  
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Competitions
            </h1>
  
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Put your skills to the test in exciting competitions like hackathons and coding challenges! Compete solo or in teams, solve real-world problems, and win great prizes while networking with fellow tech enthusiasts
            </p>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        </div>
        <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
  
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Workshops
            </h1>
  
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Enhance your skills in our hands-on workshops! From beginner to advanced topics, learn essential programming languages and tools in a supportive environment. Join us to gain practical knowledge and work on exciting projects
            </p>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
 
export default Services;