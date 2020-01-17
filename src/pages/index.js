import React from "react"
// importを追記
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    query allContentfulBlogPost {
      allContentfulBlogPost {
        nodes {
          id
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Title lists</h1>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulBlogPost.nodes.map(({ id, title }) => (
        <h2 key={id}>
          {title}
        </h2>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage