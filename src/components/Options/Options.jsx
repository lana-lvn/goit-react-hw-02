// import React from 'react'

const Options = ({ updateFeedback, onReset }) => {
  return (
    <div>
          <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
          <button onClick={() => updateFeedback('bad')}>Bad</button>
          <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Options
