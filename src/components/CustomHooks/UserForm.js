import React, {useState} from 'react'
import useInput from './useInput';

function UserForm() {
    const [firstName, bindfirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');



    const handlesubmit = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...bindfirstName}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...bindLastName}></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>        
        </div>
    )
}

export default UserForm
