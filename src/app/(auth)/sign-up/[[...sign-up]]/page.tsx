import React from 'react';
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className='h-screen w-full grid place-items-center'>
            <SignUp />
        </div>
    );
};

export default SignUpPage;