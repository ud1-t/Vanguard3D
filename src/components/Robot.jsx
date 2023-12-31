/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/robot.glb -- transform 
Author: Willy Decarpentrie (https://sketchfab.com/skudgee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/biped-robot-801d2a245e4a4405a0c2152b35b5e486
Title: Biped robot
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Robot(props) {
  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()
  const { nodes, materials } = useGLTF('./models/robot.glb')

  useFrame((state, delta) => {
    robot.current.rotation.y += delta
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})
    tl.current
    .to(robot.current.position, {z: 4}, 2)

    .to(robot.current.position, {x: 1}, 4)
    .to(robot.current.position, {y: -1}, 4)
    .to(robot.current.position, {z: 3}, 4)

    .to(robot.current.position, {x: -0.4}, 7)
    .to(robot.current.position, {y: -3}, 7)
    .to(robot.current.position, {z: 4}, 7)

    .to(robot.current.position, {x: 0}, 10)
    .to(robot.current.position, {y: -2}, 10)
    .to(robot.current.position, {z: 4}, 10)

    .to(robot.current.position, {x: 0}, 14)
    .to(robot.current.position, {y: -3}, 14)
    .to(robot.current.position, {z: 4}, 14)

  }, [])

  return (
    <group ref={robot} {...props} dispose={null} scale={[0.02, 0.02, 0.02]} position={[0, -3, 4]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="RobotFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Robot_Mesh" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Ground" position={[0, -4.344, 0]} rotation={[-Math.PI / 2, 0, 0]}>

                    <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Metal} skeleton={nodes.Object_7.skeleton} >
                    <meshPhysicalMaterial
                      color="#000"
                      roughness={ 0.2 }
                      metalness={ 1 }
                      clearcoat={ 1 }
                      emissive={'#000'}
                      reflectivity={ 0.2 }
                      iridescence={ 0.3 }
                      iridescenceIOR={ 1 }
                      iridescenceThicknessRange={[100, 1000]}
                    />
                    </skinnedMesh>
                    <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Paint} skeleton={nodes.Object_8.skeleton}>
                    <meshPhysicalMaterial
                      color="#000000"
                      roughness={ 1 }
                      metalness={ 0 }
                      clearcoat={ 1 }
                      emissive={'#000'}
                      reflectivity={ 0.1 }
                      iridescence={ 0.1 }
                      iridescenceIOR={ 1 }
                      iridescenceThicknessRange={[100, 1000]}
                    />
                    </skinnedMesh>
                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Plastic} skeleton={nodes.Object_9.skeleton}>
                    <meshPhysicalMaterial
                      color="#f00"
                      roughness={ 0.2 }
                      metalness={ 1 }
                      reflectivity={ 0.9 }
                      iridescence={ 0.3 }
                      iridescenceIOR={ 1 }
                      iridescenceThicknessRange={[100, 1000]}
                    />
                    </skinnedMesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/robot.glb')
