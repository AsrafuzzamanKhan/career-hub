import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/statistics'>Statistics</NavLink></li> */}
        <li><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
        {/* <li><NavLink to='/blogs'>Blog</NavLink></li> */}

    </>
    return (
        <div className=" bg-black text-white">
            <nav className="navbar max-w-6xl mx-auto ">
                <div className="navbar-start text-white ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-black my-8 ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex hover:text-white">
                    <ul className="menu menu-horizontal px-3 mx-4 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Star Applying</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;