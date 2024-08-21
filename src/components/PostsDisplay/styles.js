export const styles = {
    container: {
        backgroundColor: 'rgba(0,0,0,0.04)',
        padding: '15px',
        borderRadius: '8px'
    },
    containerPosts: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px'
    },
    button: {
        '&.MuiButton-root': {
            padding: '2px 16px',
            marginBottom: '10px',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            minWidth: '64px',
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