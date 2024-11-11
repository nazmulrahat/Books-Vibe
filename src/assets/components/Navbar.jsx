import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn w-full ">Home</button></NavLink>
                        <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn w-full">Listed Books</button></NavLink>
                        <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn w-full">Pages to Read</button></NavLink>
                        {/* <NavLink to={'/pagetoread'}><button className="btn w-full"></button></NavLink> */}
                    </ul>
                </div>


                <a to="/" className="btn btn-ghost text-2xl">Book Vibe</a>



            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn ">Home</button></NavLink>
                    <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn w-full">Listed Books</button></NavLink>
                    <NavLink to='/pagetoread' className={({ isActive }) => isActive ? 'text-primary font-bold border-2 rounded-lg border-[#23BE0A]' : 'font-bold'}><button className="btn w-full">Pages to Read</button></NavLink>
                    {/* <NavLink><button className="btn"></button></NavLink> */}

                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn bg-[#23BE0A]">Sign In</a>
                <a className="btn bg-[#59C6D2]">Sign Up</a>

            </div>
        </div>
    );
};

export default Navbar;