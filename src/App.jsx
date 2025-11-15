import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from './components/Headers';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home");


  return(
    <PostListProvider>
      <div className="container">
      <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />
      <div className = "content">

        <Headers/>

        {selectedTab === 'Home' ? <PostList/> : <CreatePost/>}
        
        
        <Footer/>
      </div>
        
      

      </div>
    </PostListProvider>
    
  )
}

export default App;