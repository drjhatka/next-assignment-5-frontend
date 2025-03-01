import React from 'react';
import {InputAdornment, inputBaseClasses, TextField} from "@mui/material";

type InputConfigType = {
    label: string;
    value?: string;
}

const InputField = ({config}:{config:InputConfigType}) => {
    const {label} = config;
    return (
            <TextField
                fullWidth
                defaultValue={'React DashBoard Project'}
                id="standard-suffix-shrink"
                label={label}
                variant="outlined"
                slotProps={{
                    htmlInput: {
                        sx: { color:'blueviolet' },
                    },
                    input: {
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                sx={{
                                    alignSelf: 'flex-end',
                                    margin: 0,
                                    marginBottom: '5px',
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                        opacity: 1,
                                    },
                                }}
                            >
                            </InputAdornment>
                        ),
                    },
                }}
            />
    );
};

export default InputField;