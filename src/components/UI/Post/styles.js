export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#dcfbfa',
        borderRadius: '10px',
        maxWidth: '330px',
        gap: '20px',
        boxShadow: 4,
        flexGrow: 1
    },
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '18px',
        color: 'rgba(0,0,0,0.91)',
        margin: '0px'
    },
    body: {
        fontSize: '12px',
        color: 'rgba(0,0,0,0.91)'
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
            backgroundColor: 'rgba(216,2,2,0.75)',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#d60101',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#870303',
            },
        },
        '&.MuiButton-outlined': {
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