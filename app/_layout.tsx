import { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber/native";
import { useGLTF } from "@react-three/drei/native";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Asset } from "expo-asset";
import * as THREE from "three";

function A() {
  const buffer = useLoader(THREE.FileLoader, require("../assets/tree_obj.obj"));
  const obj = useMemo(
    () => new OBJLoader().parse(THREE.LoaderUtils.decodeText(buffer)),
    [buffer]
  );
  return <primitive object={obj} scale={1} />;
}

function B() {
  const buffer = useLoader(
    THREE.FileLoader,
    Asset.fromModule(require("../assets/tree_obj.obj")).uri
  );
  const obj = useMemo(
    () => new OBJLoader().parse(THREE.LoaderUtils.decodeText(buffer)),
    [buffer]
  );
  return <primitive object={obj} scale={1} />;
}

function C(props) {
  const gltf = useGLTF(require("../assets/tree_gltf.gltf"));
  return <primitive {...props} object={gltf.scene} />;
}

export default function RootLayout() {
  return (
    <Canvas style={{ flex: 1 }}>
      <ambientLight />
      <directionalLight />
      <pointLight position={[10, 10, 10]} intensity={2000} />
      <Suspense>
        <A/>
        {/* <B /> */}
        {/* <C/> */}
      </Suspense>
    </Canvas>
  );
}
