import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export function SEO({ 
  title = "Graylock Digital — Modern Websites for Small Service Businesses", 
  description = "Graylock Digital builds and maintains modern, lead-focused websites for small service businesses — for one simple monthly subscription.",
  url = "https://graylockdigital.com" 
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
