import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import Spinner from '../components/Spinner';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;