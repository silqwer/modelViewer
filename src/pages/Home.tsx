import ProgressLoader from "@/components/ProgressLoader";
import GltfModel from "@/components/model/GltfModel";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  // 모델 아이디 값으로 glb url 구성해서 모델 다운로드
  // 모델 타입
  // 전체 화면 구성

  const [searchParams] = useSearchParams();
  const modelId = searchParams.get("modelId");
  const modelName = searchParams.get("modelName") as string;
  const modelUrl = `/api/media-download/${modelId}?size=original&fileType=model&isFlipMode=false`;
  const imageUrl = `/api/media-download/${modelId}?size=original&fileType=thumbnail`;

  console.log(modelUrl);
  //https://gateway-server-new.dev-twin.world

  return (
    <div className="w-full h-screen">
      <Helmet>
        <meta property="og:title" content={modelName} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="설명 테스트" />
      </Helmet>
      <Canvas shadows>
        <Suspense fallback={<ProgressLoader />}>
          <Stage>
            <GltfModel url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
