
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Nav from "../components/nav";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex px-4 sm:px-16 py-4 items-center justify-between bg-mainBg">
      <div className="h-12">
        <TextHoverEffect text="CSSC" />
      </div>
      <Nav/>
    </div>
  );
}
 
export default Navbar;