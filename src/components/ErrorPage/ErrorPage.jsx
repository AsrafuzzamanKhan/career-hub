import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col  items-center ">
            <h2 className="text-7xl p-10">Opps</h2>
            <Link to='/'>
                <button className="bg-yellow-600 p-3 rounded-lg text-white outline-none shadow-xl hover:bg-green-300">Go to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;