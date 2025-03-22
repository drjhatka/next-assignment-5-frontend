import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export type MultiSelectProps = {
    name:string;
    values:string[];
    label:string;
    id: string;
    selected?: string[];
}



function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function MultipleSelectChip({name, values, label, id, selected}:MultiSelectProps) {
    console.log("Seelcted ",selected);
    const theme = useTheme();
    const [multiValues, setSelectedTech] = React.useState<string[]>(selected||[]);

    //@ts-expect-error event could be of any type
    const handleChange = (event) => {
        setSelectedTech(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    name={name}
                    required={true}
                    labelId="demo-multiple-chip-label"
                    id={id}
                    multiple
                    value={values}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={() => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {multiValues.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {values?.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, values, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}