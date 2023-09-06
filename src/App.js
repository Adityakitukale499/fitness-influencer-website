import React, { Suspense, lazy, useState } from 'react'
import Header from './components/Header'
// import VideoGallery from './components/VideoGallery'
const VideoGallery = lazy(() => import('./components/VideoGallery'))

const App = () => {
  const [search ,setSearch] = useState('')
  const [numResult ,setNumResult] = useState(5)
  return (
    <>
      <Header search={search} setSearch={setSearch} setNumResult={setNumResult}/>
      <Suspense fallback={<div style={{height:'90vh', display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px'}}><i className="fa-solid fa-loader fa-spin"></i></div>}>
        <VideoGallery search={search} numResult={numResult}/>
      </Suspense>
    </>
  )
}

export default App