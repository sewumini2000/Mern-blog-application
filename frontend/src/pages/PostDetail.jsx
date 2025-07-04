import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (err) {
        setError('Post not found');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500">
          Created: {moment(post.createdAt).format('MMMM Do YYYY, h:mm a')}
        </span>
        <span className="text-sm text-gray-500">
          Updated: {moment(post.updatedAt).format('MMMM Do YYYY, h:mm a')}
        </span>
      </div>
      <div className="prose max-w-none mb-8">
        <p className="whitespace-pre-line text-gray-700">{post.content}</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate(`/posts/${id}/edit`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostDetail;