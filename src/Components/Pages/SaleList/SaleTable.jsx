// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Table } from 'antd';

// const columns = [
//   {
//     title: 'Date',
//     width: 35,
//     dataIndex: 'date',
//     key: 'date',
//     fixed: 'left',
//     sorter: true,
//   },
//   {
//     title: 'Reference #',
//     width: 40,
//     dataIndex: 'reference',
//     key: 'reference',
//     fixed: 'left',
//     sorter: true,
//   },
//   {
//     title: 'Customer',
//     dataIndex: 'customer',
//     key: '1',
//     width: 30,
//   },
//   {
//     title: 'Biller',
//     dataIndex: 'biller',
//     key: '2',
//     width: 30,
//   },
//   {
//     title: 'Sale Status',
//     dataIndex: 'sstatus',
//     key: '3',
//     width: 30,
//   },
//   {
//     title: 'Payment Status',
//     dataIndex: 'pstatus',
//     key: '4',
//     width: 30,
//   },
//   {
//     title: 'Grand Total',
//     dataIndex: 'gtotal',
//     key: '5',
//     width: 30,
//   },
//   {
//     title: 'Paid',
//     dataIndex: 'paid',
//     key: '6',
//     width: 30,
//   },
//   {
//     title: 'Due',
//     dataIndex: 'due',
//     key: '7',
//     width: 25,
//   },
//   {
//     title: 'Action',
//     key: 'operation',
//     fixed: 'right',
//     width: 30,
//     render: () => <a>action</a>,
//   },
// ];
// const data = [
//   {
//     key: '1',
//     date: '12-11-2023',
//     reference: '112233',
//     customer: 'John Brown',
//     biller: 'Sir Usama',
//     sstatus: 'Partial',
//     pstatus: 'Pending',
//     gtotal: 6875.00,
//     paid: 'Pending',
//     due: 'Pending',
//   },
//   {
//     key: '2',
//     date: '12-11-2023',
//     reference: '112233',
//     customer: 'John Brown',
//     biller: 'Sir Usama',
//     sstatus: 'Partial',
//     pstatus: 'Pending',
//     gtotal: 6875.00,
//     paid: 'Pending',
//     due: 'Pending',
//   },
// ];

// const SaleTable = () => (

//   const [users, setUsers] = useState([]);

//   useEffect(()=>{
//       fetchAllUsers();
//   },[]);

//   const fetchAllUsers = () => {
//       http.get('/users').then(res=>{
//           setUsers(res.data);
//       })
//   }

//   const deleteUser = (id) => {
//       http.delete('/users/'+id).then(res=>{
//           fetchAllUsers();
//       })
//   }

//   <Table
//     columns={columns}
//     dataSource={users.map((user,index)=>(
//       <tr key={user.id}>
//           <td>{++index}</td>
//           <td>{user.name}</td>
//           <td>{user.email}</td>
//           <td>
//               <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
//               <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
//               <button type="button" className="btn btn-danger"
//                   onClick={()=>{deleteUser(user.id)}}
//                   >Delete</button>
//           </td>
//       </tr>
//     ))}
//     scroll={{
//       x: 800,
//     }}
//   />
// );

// export default SaleTable;

import { useState,useEffect } from "react";
import http from "../../../http";
import { Link } from "react-router-dom";
export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }


    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }



    return (
        <div>
            <h2>Users listing ...</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/sale/discountcard/saleedit/" + user.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/sale/discountcard/saleview/" + user.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteUser(user.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}