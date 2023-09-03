import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style.css'
import { Canvas } from '@react-three/fiber'

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Canvas>
            <App />
        </Canvas>
    </React.StrictMode>
)