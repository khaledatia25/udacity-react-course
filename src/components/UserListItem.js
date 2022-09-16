import React from 'react';

export default ({user, showNum}) => (
    <li key={user.username}>
       <h3>Name:{" "}{user.name}</h3>
       <div>
        <p>username:{" "}{user.username}</p>
        <p>Number of Games:{" "}{showNum? user.numOfGames: "*"}</p> 
       </div>
    </li>
);