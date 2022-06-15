import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';


const FormInput = ({ name, label }) => {
    const { control } = useFormContext;

    return (
        <Grid item xs={12} sm={6}>
            <label>
                {label}
                <Controller
                    control={control}
                    fullWidth
                    name={name}
                    rules={{ required: true }}
                    render={({ field }) => <TextField {...field} />}
                />
            </label>
        </Grid>
    )
}

export default FormInput
