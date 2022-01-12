import React from 'react';

const Post = ({id, title, body}) => {

    return (
        <div className={'post'}>
            {id}{title}{body}
        </div>
    );
};

export default Post;