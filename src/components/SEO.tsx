import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const fullTitle = `${title} | geldbewuster.nl`
  const url = canonical ? `https://geldbewuster.nl${canonical}` : 'https://geldbewuster.nl'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
