import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({usersPerPage, totalUsers}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((number) => (
                    <li key={number} className='page-item'>
                        <a href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;