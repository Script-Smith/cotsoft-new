
import Link from "next/link"
import { ShoppingBag, Heart, Bell, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";

export function Navbar () {

    const navItems = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/category", label: "COLLECTION" },
        { href: "/contact", label: "CONTACT" },
    ];

    const iconLinks = [
        { href: "/cart", icon: ShoppingBag },
        { href: "/profile", icon: User },
    ];

    return (
        <nav className="fixed shadow-md top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-1.5 bg-white backdrop-blur-sm">
            <Link href={"/"}>
                <Image
                    src={"/images/logob.png"}
                    alt="Cotsoft Logo"
                    height={80}
                    width={80}
                />
            </Link>
            <div className="hidden md:flex gap-6 lg:gap-12">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm hover:text-neutral-500">
                        {item.label}
                    </Link>
                ))}
            </div>
            <Sheet >
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                    <div className="flex flex-col h-full">
                        <div className="p-4 border-b">
                            <Image src="/images/logob.png" alt="Cotsoft Industries Logo" width={150} height={50} className="mx-auto" />
                        </div>
                        <nav className="flex flex-col justify-end flex-grow text-right p-4">
                            {navItems.map((item) => (
                                <SheetClose key={item.href} asChild>
                                    <Link

                                        href={item.href}
                                        className="text-lg py-2 hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>

            <div className="hidden lg:flex items-center gap-4 sm:gap-6">
                {iconLinks.map((link) => (
                    <p key={link.href} className="hover:text-neutral-500">
                        <link.icon className="w-5 h-5" />
                    </p>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;