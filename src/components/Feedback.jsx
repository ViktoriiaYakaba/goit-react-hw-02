

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
    return ( 
    <div>
        {total > 0 ? (
            <div>
                <h2>Feedback Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive Percentage: {positivePercentage}%</p>
            </div>
        ) : (
            <p>No feedback yet</p>
        )}
    </div>)
};
export default Feedback;
