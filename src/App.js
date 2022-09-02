import { useState, useEffect } from 'react'

import SearchBar from './components/search-bar/SearchBar'
import Result from './components/result/Result'

import './app.scss'

const App = () => {

  const [content, setContent] = useState([])
  const [searchTerm, setSearchTerm] = useState("Tesla")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=2022-08-30&sortBy=publishedAt&apiKey=2b71fd601a134f8cae4a42fff2271860`)
          .then(res => res.json())
          .then(res => setContent(res.articles))
  }, [searchTerm])

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1500)
  }, [content])

  setTimeout(() => {
      setLoaded(true)
  }, 1500)

  return (
    <div className="main" data-searchTerm={searchTerm}>
      <SearchBar content={content} setSearchTerm={setSearchTerm} setLoaded={setLoaded} />
      <Result loaded={loaded} content={content} />
      <p style={loaded ? {opacity: 0, animationName: "none"} : {opacity: 1}} className="loading">Loading...</p>
      {loaded && !content && <p className="nothing-found">Nothing found</p>}
    </div>
  )
}

export default App
