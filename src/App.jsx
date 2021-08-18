import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Posts from "./components/Posts"
import Paging from "./components/Paging"

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <Posts posts={currentPosts} loading={loading} />
      <Paging postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </>
  )
}

export default App
