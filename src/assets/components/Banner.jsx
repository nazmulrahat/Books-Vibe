import { NavLink } from "react-router-dom";


const Banner = () => {
    return ( 
        <div className="hero lg:h-[500px] h-full bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse rounded-lg">
                <img src={'https://i.ibb.co/zsDgZkN/pngwing-1-removebg-preview.png'} className="max-w-sm rounded-lg " />
                <div className="text-center lg:text-start">
                    <h1 className="text-5xl lg:flex hidden font-bold mb-8">Books to freshen  <br /> up your bookshelf</h1>
                    <h1 className="text-3xl flex lg:hidden font-bold mb-8">Books to freshen up your bookshelf</h1>
                    <NavLink><button className="btn bg-[#23BE0A] text-white">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;