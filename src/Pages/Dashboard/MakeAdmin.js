import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('https://stormy-sea-79672.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>this is MakeAdmin {users.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <MakeAdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;