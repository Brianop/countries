import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>
                Whoops! an error occured.
            </h1>
            <Link to="/">Go back to countries list</Link>
        </div>
    );
};

export  default ErrorPage;