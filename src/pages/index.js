import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
  </Layout>
)

export default IndexPage
