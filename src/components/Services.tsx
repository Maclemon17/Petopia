import { FaPaw, FaTruck, FaUserMd } from "react-icons/fa";
import { GiDogBowl, GiDogHouse, GiSittingDog } from "react-icons/gi";


const petServices = [
    {
        icon: <GiDogHouse size={40} />,
        title: "Pet Boarding",
        desc: "Safe and comfortable home for your pets when you're away.",
    },
    {
        icon: <FaUserMd size={40} />,
        title: "Vet Consultation",
        desc: "Expert vet support for your pet's health & wellness.",
    },
    {
        icon: <GiDogBowl size={40} />,
        title: "Pet Food Delivery",
        desc: "Nutritious food & treats delivered to your doorstep.",
    },
    {
        icon: <GiSittingDog size={40} />,
        title: "Pet Training",
        desc: "Professional training to keep your pet well-behaved.",
    },
    {
        icon: <FaPaw size={40} />,
        title: "Grooming Services",
        desc: "Bathing, trimming & pampering sessions for your furry friend.",
    },
    {
        icon: <FaTruck size={40} />,
        title: "Quick Delivery",
        desc: "Fast, hassle-free service at your convenience.",
    },
];

const Services = () => {
    return (
        <section className="bg-[#f5eee6] py-16 px-6 lg:px-24" id="services">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#6b4226]">Our Pet Services</h2>
            <p className="text-center text-[#8d6748] max-w-xl mx-auto mb-12 text-[17px]">
                We care for your pets like family. Explore our range of trusted pet care services designed for their happiness & your peace of mind.
            </p>

            {/* SERVICES CARD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    petServices.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-[#e5d3c3]" >
                            <div className="text-[#a8522d] mb-4 cursor-pointer">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-[#6b4226] mb-2">{service.title}</h3>
                            <p className="text-[#5c4433]">{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services