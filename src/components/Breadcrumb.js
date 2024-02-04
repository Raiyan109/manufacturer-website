import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation()
    let currentLink = ''
    const crumbs = location.pathname
        .split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            // console.log(crumb);
            return (
                <div className="crumb ml-2 after:content-['>'] after:ml-0.5 after:text-red-500 capitalize font-semibold" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div >
            <div className="text-lg breadcrumbs">
                <ul>
                    <li>
                        <a>

                            {crumbs}
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;