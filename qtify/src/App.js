import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Hero heading1="100 Thousand Songs, ad-free" heading2="Over thousands podcast episodes"/>
    </StyledEngineProvider> 
    </>
  );
}

export default App;













// function App() {

//   const generateData = (key, source) => {
//     source().then((data)=>{setData((prevState)=>{return {...prevState, [key]:data}})});
    
//   }

//   useEffect(()=>{
//     generateData("topAlbums", fetchTopAlbums);
//     generateData("newAlbums", fetchNewAlbums);
//     generateData("songs", fetchSongs);

//   }, []);

//   const { topAlbums = [], newAlbums = [], songs = []} = data;
//   return (
//     <>
//     <StyledEngineProvider injectFirst>
//       <Navbar/>
//       <Navbar searchData={[...topAlbums, ...newAlbums]}/>
//       <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
//     </StyledEngineProvider> 
//     </>
//   );
// }

// export default App;
