import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;


