import { Link, useRouteError } from "react-router-dom";
import './PageNotFound.css'

const PageNotFound = () => {
    const error = useRouteError();
    return (
        <div className="page-error text-center mt-[280px]">
            {error.message}
            <h3>Hello</h3>
            <Link to='/'>
            <h1 className="rounded bg-orange-600 w-20 ml-[470px]">Home</h1>
            </Link>
        </div>
    );
};

export default PageNotFound;