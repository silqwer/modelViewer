import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

export default function OGTag() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") as string;
  const image = searchParams.get("image") as string;
  const description = searchParams.get("description") as string;

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content={description} />
      </Helmet>
      <h1>OG Tag</h1>
    </div>
  );
}
