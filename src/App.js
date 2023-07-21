import { Fragment } from 'react';
import Header from './com/hrader/header';
import Nav from './com/nav/nav';
import Swss from './com/swss/Swss';
import Section from './com/sectıon/section';
import Video from './com/video/video';
import Food from './com/food/Food';
import Slid from './com/slid/Slid';
import P from './com/p/P';
import Mean from './com/mean/Mean';
import  Search  from "./com/searsh/Searsh";
import Footer   from "./com/footer/Footer"    
function App() {
  return (
    <Fragment className="App">
      <Nav/>
      <Header/>
      <Swss/>
      <Section/>
      <Video/>
      <Food/>
      <Slid/>
      <P/>
      <Mean/>
      <Search/>
      <Footer/>
    </Fragment>
  );
}

export default App;
