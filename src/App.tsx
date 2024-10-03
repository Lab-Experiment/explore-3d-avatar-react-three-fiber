import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";
import MaleAvatar from "./Components/Avatar";
import FemaleAvatar from "./Components/FemaleAvatar";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>Loading {progress.toFixed(2)}%</Html>;
};

function AvatarSceneAnimated() {
  const avatarRef = useRef<THREE.Group>(null);
  const fbx = useLoader(FBXLoader, "/deri.fbx");
  const animation = useLoader(FBXLoader, "/deri-sit-animation.fbx");
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (avatarRef.current && animation) {
      // Initialize the AnimationMixer
      mixer.current = new THREE.AnimationMixer(avatarRef.current);

      // Load the animation clip
      const action = mixer.current.clipAction(animation.animations[0]);
      action.play();
    }

    // Cleanup
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [animation]);

  // Mengatur material setelah model dimuat
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Mengatur material meshStandardMaterial secara eksplisit
          child.material = new THREE.MeshStandardMaterial({ color: "skyblue" });
        }
      });
    }
  }, [fbx]);

  // Animate function to update the mixer
  useEffect(() => {
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer.current) {
        mixer.current.update(clock.getDelta() * 1);
      }
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return <primitive ref={avatarRef} object={fbx} />;
}

const App = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <mesh position={[-2.5, -1.8, 0]} scale={0.02}>
          <AvatarSceneAnimated />
        </mesh>
        <mesh position={[0, -2, 0]} scale={2}>
          <MaleAvatar />
        </mesh>
        <mesh position={[2.3, -2, 0]} scale={1.01}>
          <FemaleAvatar />
        </mesh>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <Environment
          preset="sunset"
          background
          backgroundRotation={new THREE.Euler(0, Math.PI / 2, 0)}
        />
      </Suspense>
    </Canvas>
  );
};

export default App;
