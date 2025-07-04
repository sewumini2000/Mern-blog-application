import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {moment(post.createdAt).format('MMMM Do YYYY')}
          </span>
          <Link
            to={`/posts/${post._id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;