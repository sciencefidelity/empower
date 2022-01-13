import { createClient, groq } from "next-sanity"
import type { Post } from "../generated/schema"
import { config } from "../lib/config"
import { PortableText } from "../lib/sanity"
import Layout from "../components/layout"

const client = createClient({
  ...config
})

const indexQuery = groq`
  *[_type == "post"][0]{
    _id, title, body, publishedAt,
    "author": author->name,
    categories[]->{_id, title}
  }
`

const Home = ({ title, publishedAt, author, categories, body }: Post) => {
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>
          {new Date(String(publishedAt)).toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <p>by: {author}</p>
        {categories && (
          <p>
            in{" "}
            {categories.map((category, index) => (
              <span key={category._id}>
                {category.title}
                {index !== categories.length - 1 ? (
                  <span>, </span>
                ) : (
                  <span></span>
                )}
              </span>
            ))}
          </p>
        )}
        <PortableText blocks={body} />
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const post = await client.fetch(indexQuery)
  const { title, publishedAt, author, categories, body }: Post = post
  return {
    props: { title, publishedAt, author, categories, body }
  }
}
