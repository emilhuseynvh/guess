import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();


    return (
        <div>
            <p>
                <Link to="/" className=' tracking-wider text-sm font-medium'>Home </Link>
                <span>
                    <Link className="capitalize tracking-wider text-sm font-medium ">{location.pathname}</Link>
                </span>
            </p>
        </div>
    );
};

export default BreadCrumbs;

