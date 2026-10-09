import Navbar from "./components/Navbar";
import About from "./Sections/About";
import Home from "./Sections/Home";

const App = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 px-4 sm:px-6 lg:px-10">
            <Navbar />
            <Home />
            <About />
        </div>
    );
};
export default App;
