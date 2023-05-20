import React from 'react';
import {Button, Checkbox, FormControlLabel, Link, TextField, Typography} from '@mui/material';
import style from './auth-form.module.css';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {loginValidation, passwordValidation} from './validation';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const AuthForm = () => {

    const {handleSubmit, control, formState: {errors}} = useForm<FormDataType>();

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
    };



    return (
        <div className={style.authForm}>
            <Typography variant="h4" gutterBottom>
                Login here
            </Typography>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    control={control}
                    name="email"
                    rules={loginValidation}
                    render={({field}) => <TextField
                        label={'Email'}
                        variant="outlined"
                        margin={'normal'}
                        fullWidth
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e)}
                        helperText={errors.email?.message}
                        error={!!errors.email}
                    />
                    }
                />

                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({field}) => <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin={'normal'}
                        fullWidth
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e)}
                        helperText={errors.password?.message}
                        error={!!errors.password}
                    />
                    }
                />

                <div style={{display: 'flex'}}><Controller
                    control={control}
                    name="rememberMe"
                    render={({field}) => (
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Remember me"
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                /></div>

                <Button
                    variant="contained"
                    type={'submit'}
                    sx={{marginBottom: '10px'}}
                    fullWidth
                    disabled={!!errors.email && !!errors.password}
                >Login</Button>

                <Typography variant="subtitle1" sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    New User? <Link href="#">Register</Link>
                </Typography>
            </form>
        </div>
    );
};