import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed, VedioDetail, ChannelDetail, SearchFeed } from './components';

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Feed/> }/>
        <Route path="/vedio/:id" exact element={ <VedioDetail/> }/>
        <Route path="/channel/:id" exact element={ <ChannelDetail/> }/>
        <Route path="/search/:searchTerm" exact element={ <SearchFeed/> }/>
      </Routes>

    </HashRouter>
  )
}

export default App
