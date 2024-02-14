import { Helmet } from "react-helmet";

export default function OGTag1() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="이건 동작합니다." />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random"
        />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="이건 설명입니다." />
      </Helmet>
      <h1>OG Tag</h1>
    </div>
  );
}
