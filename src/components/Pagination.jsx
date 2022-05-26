import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({usersPerPage, totalUsers, paginate, nextPage, prevPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
                </li>
                {pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a onClick={() => paginate(num)} href={`#${num}`} className="page-link">{num}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
