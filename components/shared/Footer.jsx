import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm text-gray-700 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif tracking-wide">COTSOFT</h3>
          <div className="flex gap-4 text-xl">
            Facebook
            {/* <FaFacebookF />
            <FaInstagram />
            <FaPinterestP /> */}
          </div>
          <address className="not-italic text-xs leading-relaxed text-gray-500">
            Orvane LLC<br />
            1234 Fashion Avenue, Suite 567<br />
            New York, NY 10001, USA
          </address>
          <p className="text-xs text-gray-400 mt-2">&copy; 2024 Orvane. All rights reserved.</p>
        </div>

        {/* Column 2 - Links Group 1 */}
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Bags</a></li>
            <li><a href="#" className="hover:underline">Footwear</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">Apparel</a></li>
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Collections</a></li>
          </ul>
        </div>

        {/* Column 3 - Empty (since newsletter is not needed) */}
        <div className="hidden md:block"></div>
      </div>
    </footer>
  )
}

export default Footer