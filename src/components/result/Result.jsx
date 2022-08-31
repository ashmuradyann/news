import { useState } from 'react'

import Description from '../description/Description'
import NewsCard from '../news-card/NewsCard'

import './result.scss'

const Result = ({ content, loaded }) => {

    const [showMore, setShowMore] = useState({ showed: false, element: {} })

    return (
        <>
            <div className="result" style={loaded ? { opacity: 1 } : { opacity: 0 }}>
                {content.slice(0, -60).map((element, i) => <NewsCard key={i} element={element} setShowMore={setShowMore} />)}
            </div>
            <Description showMore={showMore} setShowMore={setShowMore} />
        </>
    )
}

export default Result