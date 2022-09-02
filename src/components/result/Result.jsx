import { useState } from 'react'
import { motion } from "framer-motion"

import Description from '../description/Description'
import NewsCard from '../news-card/NewsCard'

import './result.scss'

const Result = ({ content, loaded }) => {

    const [showMore, setShowMore] = useState({ showed: false, element: {} })

    content.length = 40

    return (
        <>
            {/* <div className="result" style={loaded ? { opacity: 1 } : { opacity: 0 }}>
                {content.slice(0, -60).filter(el => el.urlToImage !== undefined).map((element, i) => <NewsCard key={i} element={element} setShowMore={setShowMore} />)}
            </div> */}
            <motion.div className="result" style={loaded ? { opacity: 1, scale: 5 } : { opacity: 0, scale: 5 }}
                drag
                dragConstraints={{ top: -400, right: 1200, bottom: 600, left: -1200 }}
                dragTransition={{ bounceStiffness: 250, bounceDamping: 50 }}
                dragElastic={2}
                whileTap={{ cursor: "grab" }}
                >
                {content && content.filter(el => el.urlToImage !== null).map((element, i) => <NewsCard key={i} element={element} setShowMore={setShowMore} />)}
            </motion.div>
            <Description showMore={showMore} setShowMore={setShowMore} />
        </>
    )
}

export default Result