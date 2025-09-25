import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer>
    <div >
      <div >
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}