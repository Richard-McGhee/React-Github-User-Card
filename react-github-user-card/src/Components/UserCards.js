import React from 'react';

const UserCards = props => {
 return ( 
    <div className="cardHolder">
        <h1>{props.user.login}</h1>
        <img src={props.user.avatar_url} alt="A gorgeous dude" /><br/>
        <a href={props.user.url}>{props.user.url}</a><br/>
    </div>
 );
}

export default UserCards