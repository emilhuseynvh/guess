import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        padding: '2px 0',
    },
    '& .MuiInputBase-input': {
        height: '1.2rem',
    },
});

const InputSlider = ({ value, setValue }) => {
    console.log(value);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (index) => (event) => {
        const newValue = [...value];
        newValue[index] = Number(event.target.value);
        setValue(newValue);
    };

    const handleBlur = () => {
        if (value[0] < 30) {
            setValue([30, value[1]]);
        } else if (value[1] > 500) {
            setValue([value[0], 500]);
        }
    };

    return (
        <Box className="w-full max-w-md mx-auto">
            <Box className="flex justify-between my-4">
                <CustomTextField
                    type="number"
                    value={value[0]}
                    onChange={handleInputChange(0)}
                    onBlur={handleBlur}
                    inputProps={{ min: 30, max: 500 }}
                    variant="outlined"
                    size="small"
                />
                <span className="mx-4 self-center">-</span>
                <CustomTextField
                    type="number"
                    value={value[1]}
                    onChange={handleInputChange(1)}
                    onBlur={handleBlur}
                    inputProps={{ min: 30, max: 500 }}
                    variant="outlined"
                    size="small"
                />
            </Box>
            <Slider
                value={value}
                onChange={handleChange}
                color='#333'
                valueLabelDisplay="auto"
                min={30}
                max={500}
                aria-labelledby="range-slider"
            />
        </Box>
    );
};

export default InputSlider;
