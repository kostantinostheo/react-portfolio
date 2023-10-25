import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../resources/Personal/qrcode.png";

export default function Box(){
    const colorMap = useLoader(TextureLoader, texture)
    return (
        <mesh rotation={[10, 15, 0]} scale={0.8}>
            <boxBufferGeometry attach='geometry' args={[3,3,3]}/>
            <meshNormalMaterial normalMap={colorMap} />
        </mesh>
    );
}