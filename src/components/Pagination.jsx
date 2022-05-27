import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

const Pagination = ({usersPerPage, currentPage, setCurrentPage, totalUsers, paginate, nextPage, prevPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

    };

    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);

    };


    return (
        <nav>
            <ul className="pagination justify-content-center">
                <Button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pageNumbers[0]}
                >
                    Prev
                </Button>
                {pageNumbers.map(pageNumber => (
                    <li className="page-item" key={pageNumber}>
                        <a onClick={() => paginate(pageNumber)} className="page-link ">
                            {pageNumber}
                        </a>
                    </li>
                ))}
                <Button
                    onClick={handleNextbtn}
                    disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
                >
                    Next
                </Button>
            </ul>
        </nav>
    );
};

export default Pagination;
