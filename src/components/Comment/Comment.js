import React from 'react';

const Comment = ({id, name, email, body}) => {

    return (
        <div className={'comment'}>
            {id}{name}{email}{body}
        </div>
    );
};

export default Comment;