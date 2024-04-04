import React from 'react'


export const loginForm = () => {

    return (
        <div>
            <form>
                <label htmlFor="username">UserName</label>
                <input type='text' id='username' name='UserName' />

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='Email' />

                <label htmlFor='channel' id='channel' name='Channel'>Channel</label>
                <input type='text' id='channel' name='Channel' />

                <button>Sumit</button>

            </form>
        </div>
    );
};