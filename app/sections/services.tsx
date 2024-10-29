
import SectionTitle from "../components/section_title";
import Service from "../components/service";

const Services = () => {
  return (
    <div className="flex flex-col gap-24" id="services">
      <SectionTitle title="Our Services" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16 xl:px-24 gap-8 items-center justify-center">
        <Service
          title="Guest Lectures"
          description="Expand your knowledge with our engaging lectures led by industry experts and experienced speakers. Covering a wide range of topics from emerging technologies to career development, these sessions provide valuable insights and inspiration to help you succeed in the tech world"
        />
        <Service
          title="Competitions"
          description="Put your skills to the test in exciting competitions like hackathons and coding challenges! Compete solo or in teams, solve real-world problems, and win great prizes while networking with fellow tech enthusiasts"
        />
        <Service
          title="Workshops"
          description="Enhance your skills in our hands-on workshops! From beginner to advanced topics, learn essential programming languages and tools in a supportive environment. Join us to gain practical knowledge and work on exciting projects"
        />
      </div>
    </div>
  );
}
 
export default Services;