import "./Title.css"

const Title = ({ subtitle, title, description }) => {
  return (
    <div className="title">
      <span className="title-badge">{subtitle}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default Title

