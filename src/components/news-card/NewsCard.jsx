

import './news-card.scss'

const NewsCard = ({ element, setShowMore }) => {

  const { source, title, urlToImage, publishedAt } = element

  return (
    <div className="news-card">
      <div className="img" style={{backgroundImage: `url(${urlToImage})`}}></div>
      <div className="info-area" onClick={() => setShowMore({ showed: true, element: element })}>
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