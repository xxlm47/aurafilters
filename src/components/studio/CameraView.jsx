import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const MockVideoShader = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uIntensity: { value: 0.8 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uIntensity;
    varying vec2 vUv;

    void main() {
      vec2 p = vUv;

      // Animated gradient background
      vec3 col1 = vec3(0.02, 0.02, 0.05); // Deep dark
      vec3 col2 = vec3(0.2, 0.1, 0.3) * uIntensity; // Violet tint

      float noise = fract(sin(dot(p + uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453);

      vec3 finalCol = mix(col1, col2, 0.5 + 0.5 * sin(p.y * 2.0 + uTime));
      finalCol += noise * 0.05; // Grain

      // Scanning line
      float scan = smoothstep(0.0, 0.1, abs(sin(p.y * 10.0 - uTime * 2.0)));
      finalCol *= 0.9 + 0.1 * scan;

      gl_FragColor = vec4(finalCol, 1.0);
    }
  `
}

function Scene({ intensity }) {
  const meshRef = useRef()
  const uniforms = useMemo(() => THREE.UniformsUtils.clone(MockVideoShader.uniforms), [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
      meshRef.current.material.uniforms.uIntensity.value = intensity
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        args={[MockVideoShader]}
        uniforms={uniforms}
        vertexShader={MockVideoShader.vertexShader}
        fragmentShader={MockVideoShader.fragmentShader}
      />
    </mesh>
  )
}

export default function CameraView({ intensity = 0.8 }) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-2xl">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene intensity={intensity} />
      </Canvas>

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">REC LIVE // AURA_OS</span>
      </div>
    </div>
  )
}
