import { BASE_LINK } from "config";
import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "Popoy",
  siteName: "Popoy",
  description:
    "Allow us to introduce our enthusiastic, amiable, peace-loving, and irresistibly funny alien friend, whose sole mission is to bestow upon this universe the epitome of amusement.",
  url: `${BASE_LINK}`,

  type: "website",
  robots: "nofollow, noindex",
  image: "/images/apple-touch-icon.png",
  imageog: "/images/king.webp",
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  description?: string;
  canonical?: string;
};

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta["title"] = props.templateTitle || meta.title;
  meta["description"] = props.description || meta.description;
  meta["canonical"] = `${meta.url}${props.canonical || router.asPath}`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta
        name="google-site-verification"
        content="a3q8ZRcL4o7djJz0MHXgSg49NTGhCY7Ty3d6bthyX10"
      />

      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={meta.canonical} />
      <link rel="alternate" hrefLang="en" href={meta.url} />

      <link rel="apple-touch-icon" href={meta.image} />
      <link rel="shortcut icon" href="/images/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.imageog} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@popoy_eth" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
