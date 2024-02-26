import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

type AIChatProps = {
  data: {
    name: string,
    logo: string,
    description: string,
    capabilities: string,
    price: string
  },
  content: string
}

export default function AIChat({ data, content }: AIChatProps) {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <div className="prose lg:prose-xl mx-auto my-8">
        <h1 className="text-4xl font-bold text-center my-8">{data.name}</h1>
        <img src={data.logo} alt={data.name} className="h-20 w-20 rounded-full mx-auto" />
        <p className="text-center">{data.description}</p>
        <p className="text-center"><strong>Capabilities:</strong> {data.capabilities}</p>
        <p className="text-center"><strong>Price:</strong> {data.price}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'public', 'ai'))

  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join(process.cwd(), 'public', 'ai', params.id + '.md'))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  return {
    props: {
      data: parsedMarkdown.data,
      content: parsedMarkdown.content,
    },
  }
}