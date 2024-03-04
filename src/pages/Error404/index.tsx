import { useRouteError } from 'react-router-dom';
import styles from './Error404.module.css';

interface styles {
  container: string;
  title: string;
  description: string;
}

const Error404: React.FC<{ error: unknown }> = () => {
  const error = useRouteError();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Oops! {error?.status}</h3>
      <p className={styles.description}>
        {error?.data || 'An error occurred'}
      </p>
    </div>
  );
};

export default Error404;
