import React from 'react';

const MakeAdminRow = ({ user, index, setRole }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {/* <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td> */}
            <td>User</td>
            <td><button
                onClick={() => setRole(1)}
                className="btn btn-xs">Make Admin</button></td>
        </tr>
    );
};

export default MakeAdminRow;