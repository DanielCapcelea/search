import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Pagination} from "react-bootstrap";

const UserPagination = ({usersPerPage, currentPage, setCurrentPage, totalUsers, paginate, nextPage, prevPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

    };


    return (
        <nav>
            <Pagination className="pagination justify-content-center">
                <Button
                    onClick={handlePrevBtn}
                    disabled={currentPage === pageNumbers[0]}
                >
                    Prev
                </Button>
                {pageNumbers.map(pageNumber => (
                    <Pagination.Item
                        className={currentPage === pageNumber ? "active" : null}
                        id={pageNumber}
                        key={pageNumber}
                        onClick={paginate}
                        href={`#${pageNumber}`}
                    >
                        {pageNumber}
                    </Pagination.Item>
                ))}
                <Button
                    onClick={handleNextBtn}
                    disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
                >
                    Next
                </Button>
            </Pagination>
        </nav>
    );
};

export default UserPagination;
