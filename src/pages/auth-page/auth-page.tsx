import React from 'react';
import style from './auth-page.module.css'
import {AuthForm} from './auth-form/auth-form';

export const AuthPage = () => {
    return (
        <div className={style.authPage}>
            <AuthForm/>
        </div>
    )
}