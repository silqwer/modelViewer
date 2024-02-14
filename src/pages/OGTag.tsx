import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

export default function OGTag() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") as string;
  const image = searchParams.get("image") as string;
  const description = searchParams.get("description") as string;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content="A very important title" />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random/600×300"
        />
        <link rel="canonical" href="https://www.tacobell.com" />
        <link rel="notImportant" href="https://www.chipotle.com" />
      </Helmet>
      <h1>OG Tag</h1>
      <div>{title}</div>
      <div>{image}</div>
      <div>{description}</div>
    </div>
  );
}
