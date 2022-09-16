import React from "react";

export default ({name,username, onNameChange, onUsernameChange, onSubmit, showError}) => (
    <div className="container">
        <h2>Add User</h2>
        <form className="user-form" onSubmit={(e) => onSubmit(e)}>
            
            <input
                placeholder="Enter Name"
                value={name}
                type="text"
                onChange={(e)=>onNameChange(e.target.value)} 
            />
            
                <input 
                    placeholder="Enter User Name"
                    value={username}
                    type="text"
                    onChange={(e)=>onUsernameChange(e.target.value)}
                />
            
            <button
                disabled={!(name&&username)}
            >Add</button>
        </form>
        {showError&&<span>This username already taken, Please choose another one.</span>}
    </div>
);