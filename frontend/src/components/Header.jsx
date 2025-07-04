import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MERN Blog</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/posts/create" className="hover:underline">Create Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;