export const styles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        p: 4,
    },
    textArea: {
        width: '400px',
        height: '100px',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'none',
        fontSize: '16px',
        color: '#333',
        outline: 'none',
        '&:hover': {
            borderColor: '#888',
        },
        '&:focus': {
            borderColor: '#42af2a',
            boxShadow: '0 0 0 3px #42af2a',
        },
        '&:disabled': {
            backgroundColor: '#f5f5f5',
            color: '#a0a0a0',
        },
        '&::placeholder': {
            color: '#aaa',
            opacity: 1,
        },
        '&.error': {
            borderColor: '#f5222d',
        },
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
        },
        '&.MuiButton-contained': {
            backgroundColor: 'rgba(54,154,30,0.77)',
            color: '#fff',
            border: 'none',
            '&:hover': {
                backgroundColor: 'rgb(62,175,34)',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'rgba(44,126,25,0.77)',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    }
}