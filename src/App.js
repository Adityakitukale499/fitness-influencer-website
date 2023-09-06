import React, { Suspense, lazy, useState } from 'react'
import Header from './components/Header'
// import VideoGallery from './components/VideoGallery'
const VideoGallery = lazy(() => import('./components/VideoGallery'))

const App = () => {
  const [search ,setSearch] = useState('')
  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Suspense fallback={<div style={{height:'100vh', display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px'}}>loding......</div>}>
        <VideoGallery search={search}/>
      </Suspense>
    </>
  )
}

export default App