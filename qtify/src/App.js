import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect , useState} from 'react';
import Hero from './components/Hero/Hero';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api.js';



function App() {

  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data};
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)
  }, [])

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Hero heading1="100 Thousand Songs, ad-free" heading2="Over thousands podcast episodes"/>
      <Outlet context={{data : { topAlbums, newAlbums, songs } }} />
    </StyledEngineProvider> 
    </>
  );
}

export default App;













