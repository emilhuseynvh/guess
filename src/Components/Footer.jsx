import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto flex justify-between">

        {/* My Account Section */}
        <div>
          <h4 className="text-base font-medium mb-4">My Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline">Sign-in</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Register</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Order history</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">UNiDAYS</a></li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">FAQs</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Returns</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Shipping</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Size Charts</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Gift Cards</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Store Locator</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Terms and Conditions</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Our Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Our Story</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Sustainability</a></li>
          </ul>
        </div>

        {/* BRANDS */}
        <div>
          <h4 className="text-lg font-medium mb-4">Brands</h4>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">GUESS</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Kids</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">Marciano</a></li>
            <li><a href="#" className="text-gray-700 hover:underline cursor-pointer">GUESS JEANS</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>

          <div>
            <h4 className="text-red-500 font-bold mb-2">BE THE FIRST TO KNOW</h4>
            <h3 className='text-[1.25rem] font-medium tracking-[2px]'>Join for the latest trends</h3>
            <p className="text-gray-500 mb-4"> and shop like a VIP. Plus, you'll receive 20% off your first order!</p>
            <form>
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center">
                  <input type="radio" name="style" className="form-radio text-black" value="Men" />
                  <span className="ml-2">Men</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="style" className="form-radio text-black" value="Women" />
                  <span className="ml-2">Women</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="style" className="form-radio text-black" value="Both" />
                  <span className="ml-2">Both</span>
                </label>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="px-6 py-2 bg-black text-white rounded-r-md">Sign Up</button>
              </div>
              <label className="flex items-center mt-4">
                <input type="checkbox" className="form-checkbox text-black" />
                <span className="ml-2 text-gray-600">By joining, you agree to GUESS Terms & Conditions</span>
              </label>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
