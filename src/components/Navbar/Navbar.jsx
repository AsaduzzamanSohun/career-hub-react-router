import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        } to="/jobs">Jobs</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        } to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        } to="/blogs">Blogs</NavLink></li>


    </>

    return (
        <nav className="bg-[#f1f3ff] max-h-28 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">

                                {
                                    link
                                }

                            </ul>
                        </div>
                        <Link to="/" className="text-3xl font-bold">Career Hub</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="gap-12 menu-horizontal px-1">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-semibold">Start Applying</a>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;