import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"
import "../styles/app.css"

class ResponsivePlayer extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ResponsivePlayer />
  </Layout>
)

export default IndexPage
