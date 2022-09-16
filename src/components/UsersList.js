import React from "react";
import UserListItem from "./UserListItem";
export default ({users, showNum, onToggle}) => (

        <div className="container">
            <div className="user-list">
                <div className="user-list-top">
                    <h3>Users</h3>
                    <button
                        onClick={()=>onToggle()}
                    >{showNum?"Hide":"Show"} Score</button>
                </div>
                <ul>
                    {users
                        .map((user) => 
                        <UserListItem 
                            user={user} 
                            showNum={showNum}   
                        />)}
                </ul>
            </div>
        </div>
) 