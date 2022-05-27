import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Pagination} from "react-bootstrap";

const UserPagination = ({usersPerPage, currentPage, setCurrentPage, totalUsers, paginate, nextPage, prevPage}) => {

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pageNumbers.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> <Pagination.Ellipsis /> </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> <Pagination.Ellipsis /> </li>;
    }


    const renderPageNumbers = pageNumbers.map((pageNumber) => {
        if (pageNumber < maxPageNumberLimit + 1 && pageNumber > minPageNumberLimit) {
            return (
                <Pagination.Item
                    className={currentPage === pageNumber ? "active" : null}
                    id={pageNumber}
                    key={pageNumber}
                    onClick={paginate}
                    href={`#${pageNumber}`}
                >
                    {pageNumber}
                </Pagination.Item>
            )
        } else {
            return null;
        }
    });


    return (
        <Pagination className="pagination justify-content-center">
            <Button
                onClick={handlePrevBtn}
                disabled={currentPage === pageNumbers[0]}
            >
                Prev
            </Button>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <Button
                onClick={handleNextBtn}
                disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
            >
                Next
            </Button>
        </Pagination>
    );
};

export default UserPagination;
