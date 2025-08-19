import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className="py-16 px-6 lg:px-24 bg-[#362612] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* FOOTER LOGO */}
                <div>
                    <h2 className="text-3xl font-bold mb-3">Petopia</h2>

                    <p className="text-sm text-[#e6d9cd]">
                        Your pet's second-best friend (after you!). We provide top-notch care, grooming, food & more.
                    </p>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4 mt-4">
                        <FaInstagram className="hover:text-[#f9b87e] cursor-pointer text-xl" />
                        <FaFacebook className="hover:text-[#f9b87e] cursor-pointer text-xl" />
                        <FaTwitter className="hover:text-[#f9b87e] cursor-pointer text-xl" />
                        <FaYoutube className="hover:text-[#f9b87e] cursor-pointer text-xl" />
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-[#e6d9cd] text-sm">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-[#e6d9cd] text-sm">
                        <li>Pet Grooming</li>
                        <li>Vet Consultation</li>
                        <li>Pot Food Delivery</li>
                        <li>Training & Boarding</li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-[#e6d9cd] text-sm">
                        <li>Email: support@petopia.com</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Hours: Mon - Sat, 9AM - 7PM</li>
                        <li>Location: Navi Mumbai, India</li>
                    </ul>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-[#6a4630] mt-12 pt-4 text-center text-[#d5c1b3] text-sm">
                &copy; {new Date().getFullYear()} | All rights reserved
            </div>

        </footer>
    )
}

export default Footer