import React from 'react';

const User = ({id, name, surname, email}) => {

    return (
        <div>
            {id} {name} {surname} {email}
        </div>
    );
};

export default User;