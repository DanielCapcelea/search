import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

const UsersTable = ({data, loading}) => {
    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th scope="col">
                    Name
                </th>
                <th scope="col">
                    Lastname
                </th>
                <th scope="col">
                    Email
                </th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.first_name}
                    </td>
                    <td>
                        {item.last_name}
                    </td>
                    <td>
                        {item.email}
                    </td>

                </tr>
            ))}

            </tbody>
        </Table>
    );
};

export default UsersTable;
