import heroImg from '../assets/cat.jpg';

const Hero = () => {
    return (
        <section className='bg-[#fff9f6] py-16 px-6 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between' id="hero">

            <div className="hero-text flex-1">
                <p className='text-sm text-petopia-brown font-medium md:mt-0 mt-2 mb-2 pl-0.5 border-l-4 border-r-petopia-brown'>
                    Trusted Pet Care, Tailored With Love
                </p>
                <h1 className='text-4xl md:text-5xl font-extrabold loading-tight text-[#1e1e1e]'>
                    Your <span className='text-petopia-accent-brown'>Pet</span> Deserves <br /> The Best Family.
                </h1>

                {/* CTA BUTTONS */}
                <div className='mt-8 flex gap-6'>
                    <button className='px-3.5 md:px-6 py-3 rounded-lg font-semibold text-white bg-petopia-accent-brown hover:bg-[#e46637] shadow transition'>Make a Reservation</button>
                    <button className='px-3.5 md:px-6 py-3 rounded-lg font-semibold text-white bg-[#1e1e1e] hover:bg-[#333] shadow transition'>Learn More</button>
                </div>
            </div>

            <div className="hero-img w-full md:w-2/4">
                <img src={heroImg} alt="cat image" className='md:rounded-full' />
            </div>
        </section>
    )
}

export default Hero