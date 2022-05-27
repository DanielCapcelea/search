import './App.css';
import {useEffect, useState} from "react";
import UsersTable from "./components/Table";
import UserPagination from "./components/Pagination";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FloatingLabel, FormControl} from "react-bootstrap";

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [usersPerPage] = useState(20);


    //Change Page
    const paginate = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // my deployed api
    // https://secure-lake-88576.herokuapp.com/
    //Api request method
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get(`https://secure-lake-88576.herokuapp.com/?queryRequest=${query}`);
            setData(res.data);
            setLoading(false);
        };
        if (query.length === 0 || query.length > 1) fetchUsers();
    }, [query]);


    // local search method
    // const keys = ['first_name', 'last_name', 'email'];
    // const search = (data) => {
    //     return data.filter(
    //         (item) =>
    //             // One Way
    //             // item.first_name.toLowerCase().includes(query) ||
    //             // item.last_name.toLowerCase().includes(query) ||
    //             // item.email.toLowerCase().includes(query));
    //
    //             // Better Way
    //             keys.some(key => item[key].toLowerCase().includes(query))
    //     )
    // }

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);


    return (
        <div className="app">
            <FloatingLabel
                controlId="floatingInput"
                label="Search..."
            >
                <FormControl type="text" placeholder='Search...' onChange={e => setQuery(e.target.value)}/>
            </FloatingLabel>


            {/*Table search getting data from api*/}
            <UsersTable data={currentUsers} loading={loading}/>
            <UserPagination usersPerPage={usersPerPage}
                            currentUsers={currentUsers}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalUsers={data.length}
                            paginate={paginate}
            />
        </div>
    );
}

export default App;
