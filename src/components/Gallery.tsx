import { type GalleryProps } from "../types/types";

const Gallery = ({ items }: GalleryProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item) => (
                <div
                    key={item.doctorName}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                    <div className="overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.doctorName}
                            width="600"
                            height="400"
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <h2 className="text-2xl font-bold p-5 text-gray-800">
                            {item.doctorName}
                        </h2>
                    </div>

                    <p className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-accent transition">
                        {item.study}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default Gallery;
