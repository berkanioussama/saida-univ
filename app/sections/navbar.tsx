import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex px-16 py-4 items-center justify-between">
      <div className="h-12">
        <TextHoverEffect text="CSSC" />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
                <p className="text-white px-4 py-2">Home</p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <p className="text-white px-4 py-2">Services</p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <p className="text-white px-4 py-2">Testimonials</p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <p className="text-white px-4 py-2">About us</p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <p className="text-white px-4 py-2">Contact</p>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
 
export default Navbar;