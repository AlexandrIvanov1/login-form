import React from 'react';
import {Button, Checkbox, FormControlLabel, Link, TextField, Typography} from '@mui/material';
import style from './auth-form.module.css'
import {useForm} from 'react-hook-form';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const AuthForm = () => {

    const {register, handleSubmit} = useForm<FormDataType>()

    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }

    return (
        <div className={style.authForm}>
            <Typography variant="h4" gutterBottom>
                Login here
            </Typography>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>



                <TextField
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    margin={'normal'}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type={'password'}
                    variant="outlined"
                    {...register('password')}
                    margin={'normal'}
                    fullWidth
                />
                <FormControlLabel
                    control={<Checkbox defaultChecked/>}
                    label="Remember me"
                    {...register('rememberMe')}
                />
                <Button variant="contained" type={'submit'} sx={{marginBottom: '10px'}} fullWidth>Login</Button>
            </form>

            <Typography variant="subtitle1">
                New User? <Link href="#">Register</Link>
            </Typography>
        </div>
    )
}