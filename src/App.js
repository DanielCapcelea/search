import './App.css';
import {Users} from "./users";
import {useEffect, useState} from "react";
import Table from "./Table";
import axios from "axios";

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    //Server request method
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:5001")
            setData(res.data)
        };
        fetchUsers();
    }, [])


    // table method

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

    return (
        <div className="app">
            <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)}/>

            {/*Classic search*/}

            {/*<ul className="list">*/}
            {/*    {Users.filter((user) =>*/}
            {/*        user.first_name.toLowerCase().includes(query)*/}
            {/*    ).map((user) => (*/}
            {/*        <li key={user.id} className="listItem">*/}
            {/*            {user.first_name}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


            {/*Table local data search with more parameters*/}

            {/*<Table data={search(Users)}/>*/}


            {/*Table search getting data from server*/}
            {<Table data={data}/>}

        </div>
    );
}

export default App;
