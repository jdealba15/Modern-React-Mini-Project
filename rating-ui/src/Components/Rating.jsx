const Rating = () => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    const clicked = () => console.log('Clicked!');
    return (
        <div className='rating-container'>
            <h2>Rate Your Expereince</h2>
            <div className="stars">
                { stars.map((star) => (
                    <span onClick={clicked} key={star} className='star'>
                        {'\u2605'}</span>
                )) }
            </div>
        </div>
    );
};

export default Rating;