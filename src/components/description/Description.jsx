
import './description.scss'

const Description = ({ showMore, setShowMore }) => {
  
  const { source, title, urlToImage, url, publishedAt, content, description } = showMore.element

  return (
    <div style={showMore.showed ? { transform: "translateY(0)" } : { transform: "translateY(100%)" }} className="description">
      <div className="description-header">
        <img src={urlToImage} alt="is not loaded" />
        <div className="header-title">
          <span className="material-symbols-outlined" onClick={() => setShowMore(prev => {
            return {
              ...prev,
              showed: false
            }
          })}>
            close
          </span>
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <p>{content}</p>
      </div>
      <div className="read-more">
        <p>{source?.name ? source?.name : "unknown"}</p>
        <a href={url}>
          <p>More</p>
          <span className="material-symbols-outlined">
            read_more
          </span>
        </a>
        <p>{publishedAt?.slice(0, -10).replaceAll("-", ".")}</p>
      </div>
    </div>
  )
}

export default Description