import Button from "./Button";
import heroImage from "../assets/hero-image.webp";

const Hero = () => {
    return (
        <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center lg:justify-between px-6 lg:px-16 py-12">
            <div className=" flex w-full flex-col-reverse justify-between lg:flex-row items-center gap-12">
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Welcome to Our Clinic
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
                        We provide the best healthcare services for you and your
                        family. Our experienced doctors and nurses are dedicated
                        to ensuring you receive the care and attention you
                        deserve.
                    </p>

                    <div className="mt-8">
                        <Button
                            text="Book an Appointment"
                            cn="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                            onClick={() => {}}
                        />
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex-1 w-full justify-center">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className=" w-full lg:max-w-[600px] lg:h-[700px] object-cover rounded-lg shadow-lg"
                        width="1200"
                        height="1400"
                        fetchPriority="high"
                    />
                    <div className="absolte bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg">
                        <p className="font-semibold">5000+ Patients Treated</p>
                        <p className="text-sm text-gray-500">
                            Trusted healthcare services
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
