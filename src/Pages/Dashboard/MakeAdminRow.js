import React from 'react';

const MakeAdminRow = ({ user }) => {

    return (
        <tr>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {/* <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td> */}
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default MakeAdminRow;