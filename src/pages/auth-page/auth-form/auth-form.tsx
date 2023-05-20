import React from 'react';
import {Button, Checkbox, FormControlLabel, Link, TextField, Typography} from '@mui/material';
import style from './auth-form.module.css';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const AuthForm = () => {

    const {register, handleSubmit, control, formState: {errors}} = useForm<FormDataType>();

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        console.log(data);
    };

    console.log(!!errors);


    return (
        <div className={style.authForm}>
            <Typography variant="h4" gutterBottom>
                Login here
            </Typography>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    control={control}
                    name="email"
                    render={({field}) => <TextField
                        label={'Email'}
                        variant="outlined"
                        margin={'normal'}
                        fullWidth
                        {...register('email', {required: 'This field is required'})}
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
                    render={({field}) => <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin={'normal'}
                        fullWidth
                        {...register('password', {required: 'This field is required',  minLength: {value: 4, message: 'Min length is 4'}})}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e)}
                        helperText={errors.password?.message}
                        error={!!errors.password}
                    />
                    }
                />

                <Controller
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
                />

                <Button variant="contained" type={'submit'} sx={{marginBottom: '10px'}} fullWidth disabled={!!errors.email && !!errors.password}>Login</Button>
            </form>

            <Typography variant="subtitle1">
                New User? <Link href="#">Register</Link>
            </Typography>
        </div>
    );
};