import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-loader"> </span>
      <p
        style={{ 
          fontSize: 14,
          color: 'white',
           fontWeight : 400
         }}   
      
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader