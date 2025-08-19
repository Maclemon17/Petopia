import AboutImg from '../assets/About.png';

const AboutUs = () => {
    return (
        <section className="py-16 px-6 lg:px-24 bg-[#fdf7f2]" id="AboutUs">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* ABOUT TEXT */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-[#5a3b1f] mb-6 md:text-left text-center">About Petopia</h2>
                    <p className="text-[#664a2e] text-lg loading-relaxed mb-4">
                        At <span className="font-semibold">Petopia</span> we believe that
                        pets aren't just animals — they're family. That's why we built a
                        platform that delivers trusted, loving, and professional pet care
                        services to your doorstep.
                    </p>
                    <p className="text-[#7d5640] text-base">
                        Whether it's a grooming session, a vet consultation, or simply a
                        delicious treat — we ensure your pet gets the best. Founded by true
                        animal lovers, our mission is to make every pet feel healthy, happy,
                        and loved.
                    </p>
                </div>

                {/* ABOUT IMAGE */}
                <div className="flex-1">
                    <img src={AboutImg} alt="cat & Dog" className="w-full rounded-2xl border border-[#e8d7c8] bg-white" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs