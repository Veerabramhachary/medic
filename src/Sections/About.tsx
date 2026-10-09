import { Info } from "../assets/data";
import Gallery from "../components/Gallery";
import SectionHeading from "../components/SectionHeading";

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen flex items-start justify-center flex-col px-6 lg:px-16 py-12"
        >
            <SectionHeading
                text="Our"
                spanText="Doctors"
                spanCn="text-accent"
                cn="mb-10"
            />
            <div>
                <Gallery items={Info} />
            </div>
        </section>
    );
};
export default About;
