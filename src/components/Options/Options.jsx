import style from "./options.module.css";

const Options = ({ updateFeedback, onReset, totalFeedback }) => {
  return (
    <div className={style.wrap}>
      <button onClick={() => updateFeedback('good')} className={style.btn}>Good</button>
      <button onClick={() => updateFeedback('neutral')} className={style.btn}>Neutral</button>
          <button onClick={() => updateFeedback('bad')} className={style.btn}>Bad</button>
      {totalFeedback > 0 &&  (<button onClick={onReset} className={style.btn}>Reset</button>)}    
    </div>
  )
}

export default Options
