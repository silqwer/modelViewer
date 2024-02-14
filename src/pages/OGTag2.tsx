import { Helmet } from "react-helmet";

export default function OGTag2() {
  return (
    <div>
      <Helmet>
        <title>동작한다</title>
        <meta property="og:title" content="이건 동작합니다." />
        <link rel="canonical" href="https://twin.world" />
        <meta name="description" content="Helmet application" />
        <meta
          name="image"
          content="https://images.unsplash.com/photo-1706391740145-19c93b1cda9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzk1MTM4Mg&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </Helmet>
      <h1>OG Tag2</h1>
    </div>
  );
}
