import { TextField, styled } from '@mui/material';
import { ReactComponent as SearchIcon } from 'S#/images/icons/search.svg';

export const StyledTextField = styled(TextField)`
    fieldset {
        border: 1px solid black;
        border-radius: 0px;
        padding: 0;
    }

    input {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }

    input {
        height: 100%;
        padding: 16px 14px;
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none; // Yeah, yeah everybody write about it
    }

    input::placeholder {
        font-family: 'Gilroy', sans-serif;
        font-size: 16px;
    }

    & .MuiInputBase-root {
        height: 100%;
    }

    & .MuiFormControl-root {
        height: '100%';
    }

    & .MuiOutlinedInput-root {
        max-height: 240px;
    }

    & .MuiFormLabel-root {
        font-family: 'Gilroy', sans-serif;
        font-size: 16px;
        position: absolute;
        top: -2px;
    }
`;

export const StyledSearchInput = styled(TextField)`
    fieldset {
        border: 1px solid black;
        border-radius: 0px;
    }

    input::placeholder {
        position: absolute;
        right: 4px;
        top: 19px;
        font-family: 'Gilroy', sans-serif;
        font-size: 16px;
    }

    & .MuiOutlinedInput-root {
        height: 50px;
        padding-right: 20px;
    }
`;

export const StyledSearchIcon = styled(SearchIcon)`
    width: 12px;
    height: 12px;
`;

export const LimitBlock = styled('div')`
    display: flex;
    justify-content: right;
    margin-top: 6px;
    color: #828282;
    font-size: 14px;

    &.warning {
        color: #e30613;
    }
`;
