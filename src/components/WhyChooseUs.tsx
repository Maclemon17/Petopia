import { FaUserMd, FaRegSmile, FaTruck, FaShieldAlt } from "react-icons/fa";

const reasons = [
    {
        icon: <FaUserMd size={30} />,
        title: "Certified Vets",
        desc: "Your pet’s health is in trusted, expert hands. We connect you with verified veterinarians for every need.",
    },
    {
        icon: <FaRegSmile size={30} />,
        title: "5000+ Happy Pets",
        desc: "Thousands of wagging tails and purring friends. Trusted by pet parents across India.",
    },
    {
        icon: <FaTruck size={30} />,
        title: "Fast & Reliable Delivery",
        desc: "On-time doorstep delivery of pet food, grooming kits & accessories in 20+ cities.",
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: "Safe & Verified Services",
        desc: "Background-verified staff & vet-approved products. Your pet’s safety is our priority.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#f3eae3] to-[#fefaf6]" id="WhyChooseUs">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#5a3b1f] ">Why Choose Petopia</h2>
            <p className="text-center text-[#7c5a3b] max-w-2xl mx-auto mb-16 text-[17px]">
                At Petopia, we go beyond just pet care — we build relationships.
                Here's what makes us different (and your pet's favorite).
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300 border border-[#e5d3c3]">
                            <div className="bg-[#fff1e6] w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-5 shadow-md group-hover:bg-[#dcbfa6] transition">
                                <span className="text-[#8b4513] cursor-pointer">{reason.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#5a3b1f] mb-2">{reason.title}</h3>
                            <p className="text-[#664a2e] text-sm loading-relaxed">{reason.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChooseUs