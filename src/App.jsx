import { ScrollControls, Scroll, Environment, Sparkles, Float, Ring, MeshReflectorMaterial } from '@react-three/drei'
import { Robot } from './components/Robot.jsx'
import baffle from 'baffle'
import { useEffect } from 'react'
import './style.css'

function App() {

    useEffect(() => {
        const target = baffle('.title')
        target.set({
            characters: 'V▞A▒N▞▚G▙U▛▖A▒R▙D',
            speed: 100
        })
        target.start()
        target.reveal(1000, 1000)
    })

    return (
        <>
        <color attach="background" args={['#444444']} />
        <ambientLight intensity={ 0.2 } />
        <spotLight position={[16, 16, 16]} angle={ 24 } penumbra={ 1 } castShadow intensity={ 10 } shadow-bias={ -0.0001 } />
        <Environment
            background
            intensity={0.8}
            files="./env/hdri.hdr"
            blur={0.3}
        />
        {/* <Sparkles size={2} color={"#00f"} scale={[6,6,6]}></Sparkles> */}
        <Float floatIntensity={5}>
            <Ring scale={ 4.5 } position={[2, -1, -1.5]} args={[0, 0.95, 60]} rotation-y={-Math.PI * 0.25} >
            <MeshReflectorMaterial
                color={"#efefef"}
                blur={[0, 0]}
                mixBlur={0}
                mixStrength={1}
                mixContrast={1}
                resolution={640}
                mirror={1}
                depthScale={0}
                minDepthThreshold={0}
                maxDepthThreshold={1}
                depthToBlurRatioBias={1}
                distortion={1}
                reflectorOffset={0.2} 
            />
            </Ring>
        </Float>
        <ScrollControls pages={4} damping={0.16} >
        {/* <Scroll> */}
            <Robot />
        {/* </Scroll> */}
        <Scroll html style = {{width: '100%'}}>
        <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13rem', transform: `translate(-50%,-50%)` }}>VANGUARD</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`, left: '12vw'}}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px' }}>Futuristic design inspired by advanced technology, this robot is as stylish as it is efficient. Beneath its modern exterior, it houses a powerful AI system and advanced sensors, making it the ultimate companion for a wide range of tasks, offering both functionality and aesthetics.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`, left: '64vw'}}>
            <div className='col' style={{ positipublicon: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: '440px' }}>A marvel of cutting-edge design and technology. Its imposing, metallic presence is both a testament to its raw power and a warning of its potential dangers.</p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>A FUTURISTIC BEHEMOTH</h2>              
          
          <button style={{ position: 'absolute', top: `370vh`,left: '50%', transform: `translate(-50%,-50%)`, background: '#cccccc' }}>Buy now</button>
        </Scroll>
        </ScrollControls>
        </>
    )
}

export default App;