import style from "./feedback.module.css"

const Feedback = ({ feedbackTypes, totalFeedback, positive }) => {
  return (
      <>
      <ul className={style.list}>
            <li>{`Good: ${feedbackTypes.good}`}</li>
            <li>{`Neutral: ${feedbackTypes.neutral}`}</li>
            <li>{`Bad: ${feedbackTypes.bad}`}</li>
            <li>{`Total: ${totalFeedback}`}</li>
            <li>{`Positive: ${positive}`}</li>
          </ul>
      </>
  )
}

export default Feedback


