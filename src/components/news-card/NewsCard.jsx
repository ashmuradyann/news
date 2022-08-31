

import './news-card.scss'

const NewsCard = ({ element, setShowMore }) => {

  const { source, title, urlToImage, publishedAt } = element

  return (
    <div className="news-card" onClick={() => setShowMore(prev => {
      return {
        showed: true,
        element: element,
      }
    })}>
      <img src={urlToImage} alt="is not loaded" />
      <div className="info-area">
        <p className="title">{title}</p>
        <div>
          <p className="author">{source?.name ? source?.name : "unknown"}</p>
          <p className="date">{publishedAt?.slice(0, -10).replaceAll("-", ".")}</p>
        </div>
      </div>
    </div >
  )
}

export default NewsCard