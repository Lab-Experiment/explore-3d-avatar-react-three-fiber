/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 uploads_files_3966512_Female.glb -t -k 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_4: THREE.Mesh;
    Mesh_5: THREE.Mesh;
    Mesh_6: THREE.Mesh;
    Mesh_7: THREE.Mesh;
    Mesh_8: THREE.Mesh;
    Mesh_9: THREE.Mesh;
    Mesh_10: THREE.Mesh;
    Mesh_11: THREE.Mesh;
    Mesh_12: THREE.Mesh;
    Mesh_13: THREE.Mesh;
    Mesh_14: THREE.Mesh;
    Mesh_15: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Mesh002: THREE.Mesh;
    Mesh002_1: THREE.Mesh;
    Mesh002_2: THREE.Mesh;
    Mesh002_3: THREE.Mesh;
    Mesh002_4: THREE.Mesh;
    Mesh002_5: THREE.Mesh;
    Mesh002_6: THREE.Mesh;
    Mesh003: THREE.Mesh;
    Mesh003_1: THREE.Mesh;
    Mesh004: THREE.Mesh;
    Mesh004_1: THREE.Mesh;
  };
  materials: {
    Torso: THREE.MeshStandardMaterial;
    Face: THREE.MeshStandardMaterial;
    Lips: THREE.MeshStandardMaterial;
    Teeth: THREE.MeshStandardMaterial;
    Ears: THREE.MeshStandardMaterial;
    Legs: THREE.MeshStandardMaterial;
    EyeSocket: THREE.MeshStandardMaterial;
    Mouth: THREE.MeshStandardMaterial;
    Arms: THREE.MeshStandardMaterial;
    Pupils: THREE.MeshStandardMaterial;
    EyeMoisture: THREE.MeshStandardMaterial;
    Fingernails: THREE.MeshStandardMaterial;
    Cornea: THREE.MeshStandardMaterial;
    Irises: THREE.MeshStandardMaterial;
    Sclera: THREE.MeshStandardMaterial;
    Toenails: THREE.MeshStandardMaterial;
    Eyelashes: THREE.MeshStandardMaterial;
    EyeMoisture_1: THREE.MeshStandardMaterial;
    Mat6: THREE.MeshStandardMaterial;
    Mat4: THREE.MeshStandardMaterial;
    Mat3: THREE.MeshStandardMaterial;
    Mat: THREE.MeshStandardMaterial;
    Mat5: THREE.MeshStandardMaterial;
    Mat2: THREE.MeshStandardMaterial;
    Mat1: THREE.MeshStandardMaterial;
    Belt: THREE.MeshStandardMaterial;
    Lower: THREE.MeshStandardMaterial;
    Sleeve: THREE.MeshStandardMaterial;
    Upper: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

function FemaleAvatar(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/uploads_files_3966512_Female.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Female" rotation={[Math.PI / 2, 0, 0]} scale={0.019}>
        <mesh
          name="Mesh"
          geometry={nodes.Mesh.geometry}
          material={materials.Torso}
        />
        <mesh
          name="Mesh_1"
          geometry={nodes.Mesh_1.geometry}
          material={materials.Face}
        />
        <mesh
          name="Mesh_2"
          geometry={nodes.Mesh_2.geometry}
          material={materials.Lips}
        />
        <mesh
          name="Mesh_3"
          geometry={nodes.Mesh_3.geometry}
          material={materials.Teeth}
        />
        <mesh
          name="Mesh_4"
          geometry={nodes.Mesh_4.geometry}
          material={materials.Ears}
        />
        <mesh
          name="Mesh_5"
          geometry={nodes.Mesh_5.geometry}
          material={materials.Legs}
        />
        <mesh
          name="Mesh_6"
          geometry={nodes.Mesh_6.geometry}
          material={materials.EyeSocket}
        />
        <mesh
          name="Mesh_7"
          geometry={nodes.Mesh_7.geometry}
          material={materials.Mouth}
        />
        <mesh
          name="Mesh_8"
          geometry={nodes.Mesh_8.geometry}
          material={materials.Arms}
        />
        <mesh
          name="Mesh_9"
          geometry={nodes.Mesh_9.geometry}
          material={materials.Pupils}
        />
        <mesh
          name="Mesh_10"
          geometry={nodes.Mesh_10.geometry}
          material={materials.EyeMoisture}
        />
        <mesh
          name="Mesh_11"
          geometry={nodes.Mesh_11.geometry}
          material={materials.Fingernails}
        />
        <mesh
          name="Mesh_12"
          geometry={nodes.Mesh_12.geometry}
          material={materials.Cornea}
        />
        <mesh
          name="Mesh_13"
          geometry={nodes.Mesh_13.geometry}
          material={materials.Irises}
        />
        <mesh
          name="Mesh_14"
          geometry={nodes.Mesh_14.geometry}
          material={materials.Sclera}
        />
        <mesh
          name="Mesh_15"
          geometry={nodes.Mesh_15.geometry}
          material={materials.Toenails}
        />
        <mesh
          name="Mesh001"
          geometry={nodes.Mesh001.geometry}
          material={materials.Eyelashes}
        />
        <mesh
          name="Mesh001_1"
          geometry={nodes.Mesh001_1.geometry}
          material={materials.EyeMoisture_1}
        />
        <mesh
          name="Mesh002"
          geometry={nodes.Mesh002.geometry}
          material={materials.Mat6}
        />
        <mesh
          name="Mesh002_1"
          geometry={nodes.Mesh002_1.geometry}
          material={materials.Mat4}
        />
        <mesh
          name="Mesh002_2"
          geometry={nodes.Mesh002_2.geometry}
          material={materials.Mat3}
        />
        <mesh
          name="Mesh002_3"
          geometry={nodes.Mesh002_3.geometry}
          material={materials.Mat}
        />
        <mesh
          name="Mesh002_4"
          geometry={nodes.Mesh002_4.geometry}
          material={materials.Mat5}
        />
        <mesh
          name="Mesh002_5"
          geometry={nodes.Mesh002_5.geometry}
          material={materials.Mat2}
        />
        <mesh
          name="Mesh002_6"
          geometry={nodes.Mesh002_6.geometry}
          material={materials.Mat1}
        />
        <mesh
          name="Mesh003"
          geometry={nodes.Mesh003.geometry}
          material={materials.Belt}
        />
        <mesh
          name="Mesh003_1"
          geometry={nodes.Mesh003_1.geometry}
          material={materials.Lower}
        />
        <mesh
          name="Mesh004"
          geometry={nodes.Mesh004.geometry}
          material={materials.Sleeve}
        />
        <mesh
          name="Mesh004_1"
          geometry={nodes.Mesh004_1.geometry}
          material={materials.Upper}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/uploads_files_3966512_Female.glb");
export default FemaleAvatar;
