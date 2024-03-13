const Options = ({ onFeedback, onReset, hasFeedback }) => {
  return (
    <div className="containerBtn">
      <button className="btn" onClick={() => onFeedback('good')}>Good</button>
      <button className="btn" onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className="btn" onClick={() => onFeedback('bad')}>Bad</button>
      {hasFeedback && <button className="btn" onClick={onReset}>Reset</button>}
    </div>
  );
};
export default Options;
