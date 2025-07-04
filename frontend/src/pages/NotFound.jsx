import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;