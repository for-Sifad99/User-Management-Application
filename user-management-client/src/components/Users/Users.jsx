import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    // console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user);

        // POST request to add a new user
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after post: ', data);
                const newUser = [...users, data];
                setUsers(newUser);
                e.target.reset();
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '4px' }}>
                    <input type="text" name='name' />
                    <br />
                    <input type="email" name="email" />
                    <br />
                    <input type="submit" value="Add User" />
                </form>
                {
                    users.map(user => <div key={user.id} style={{ border: '1px solid white', marginBottom: '10px', padding: '4px' }}>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;