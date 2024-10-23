import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2024 Shuwei Zhu |{' '}
        <Link to="/credits">Credits</Link>  
      </p>
    </footer>
  );
};

export default Footer;
