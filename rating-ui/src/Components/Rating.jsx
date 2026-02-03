const Rating = () => {
    return (
        <div className='rating-container'>
            <h2>Rate Your Expereince</h2>
            <div className="stars">
                { [1, 2, 3, 4, 5].map((star, index) => (
                    <span key={star} className='star'>
                        {'\u2605'}</span>
                )) }
            </div>
        </div>
    );
};

export default Rating;