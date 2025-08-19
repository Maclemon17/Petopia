import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Anjali Sharma",
        feedback:
            "Petopia is a blessing! My dog loves their grooming service, and I've never seen him so excited for a bath. Highly recommended!",
    },
    {
        name: "Rahul Desai",
        feedback:
            "I was skeptical at first, but their vet consultation was super smooth. The doctor was kind and knowledgeable. Felt like home service!",
    },
    {
        name: "Sneha Iyer",
        feedback:
            "Their pet food delivery is always on time and the quality is top-notch. My cat loves their treats more than anything!",
    },
    {
        name: "Arjun Patel",
        feedback:
            "The professionalism of their trainers is commendable. My puppy learned basic commands in just a week. Great service!",
    },
];


const Testimonials = () => {
    return (
        <section className="py-16 px-6 lg:px-24 bg-[#fdf5ec]" id="testimonials">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#5a3b1f]">What Our Customers Say</h2>
            <p className="text-center text-[#7c5a3b] max-w-2xl mx-auto mb-12 text-[17px]">
                Real stories from happy customers who've experienced the Petopia difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {
                    testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 border border-[#ead9c7] relative cursor-pointer">
                            <FaQuoteLeft className="text-[#d1b194] text-3xl absolute top-6 left-6 opacity-30" />

                            <p className="text-[#5e3e28] text-lg mb-6 loading-relaxed z-10 relative">{testimonial.feedback}</p>
                            <p className="text-[#8d674a] font-semibold text-right"> - {testimonial.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials