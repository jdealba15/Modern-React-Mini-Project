const Rating = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Rate Your Expereince</h2>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: '20px',
    },
    heading: { color: 'red' },
};

export default Rating;