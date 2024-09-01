import React from 'react'
import axios from 'axios'

const SignInButton = ({ email, pwd }) => {

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/', {
                email, pwd
            })

            console.log(response);

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button onClick={handleLogin} className='w-full h-[56px] rounded-[30px] bg-[#477EE7] flex items-center justify-center'>
            <p className='text-[16px] font-[500] text-white'>Sign in</p>
        </button>
    )
}

export default SignInButton