import {InputAdornment, inputBaseClasses, TextField} from "@mui/material";
export type InputConfigType ={
    label: string;
    defaultValue?: string;
    colSpan?: string;
}

const TextInputField = ({config}:{config:InputConfigType}) => {
    const {label, defaultValue, colSpan} = config;
    console.log('ColSpan', colSpan);
    return (
    <div className={colSpan && 'grid col-span-'+colSpan}>
        <TextField
            fullWidth
            defaultValue={defaultValue ? defaultValue : ''}
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
    </div>
    );
};

export default TextInputField;
