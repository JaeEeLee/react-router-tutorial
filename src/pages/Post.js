import React from 'react';

const Post = ({match}) => {
    return (
        <div>
            post {match.params.id}
        </div>
    )
}

export default Post;