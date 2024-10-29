import { NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Nav = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#hero" legacyBehavior passHref>
              <p className="text-white px-4 py-2 cursor-pointer">Home</p>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#services" legacyBehavior passHref>
          <p className="text-white px-4 py-2 cursor-pointer">Services</p>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#testimonials" legacyBehavior passHref>
          <p className="text-white px-4 py-2 cursor-pointer">Testimonials</p>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#about" legacyBehavior passHref>
          <p className="text-white px-4 py-2 cursor-pointer">About us</p>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
          <p className="text-white px-4 py-2 cursor-pointer">Contact</p>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
 
export default Nav;