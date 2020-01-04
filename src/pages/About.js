import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>
                This is About page
            </h2>
            <p>{match.params.name}</p>
            <p>{detail && 'detail : lalalal'}</p>
        </div>
    )
}

export default About;