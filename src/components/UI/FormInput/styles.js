export const styles = {
    formInput: {
        '&.MuiInput-root': {
            backgroundColor: 'rgb(255,255,255)',
            borderRadius: '4px',
            height: '35px',

        },
        '&.Mui-focused': {
            borderColor: 'black',

        },
        '&.Mui-disabled': {
            backgroundColor: 'lightgrey',

        },
        '&.Mui-error': {
            borderColor: 'red',
        },
        '&.MuiInput-multiline': {
            padding: '10px',

        },
        '& .MuiInput-input': {
            padding: '10px',

        },
        '& .MuiInput-inputTypeSearch': {
            borderRadius: '4px',
        },
    },
    inputLabel: {
        '&.MuiInputLabel-root': {
            color: 'black',
            paddingTop: '5px',
        },
        '&.Mui-focused': {
            color: 'black',
            fontSize: '22px',
        },
        '&.Mui-disabled': {
            color: 'grey',
        },
        '&.Mui-error': {
            color: 'red',
        },
        '&.Mui-required': {
            color: 'red',
        },
        '& .MuiInputLabel-asterisk': {
            color: 'red',
        },
    },
    errorText: {
        color: 'red',
        fontSize: 'small',
        margin: '0 0 0 5px'
    },
    formControl: {
        '&.MuiFormControl-root': {
            marginBottom: '16px',
            width: '400px',

        },
        '&.Mui-disabled': {
            opacity: 0.5,
        },
        '& .MuiInput-underline:before': {
            border: '1px solid rgba(0,0,0,0.09)',
            paddingTop: '10px',
            borderRadius: '4px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            border: '1px solid rgba(0,0,0,0.09)',
            borderRadius: '4px',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'transparent',
        },
    }
}