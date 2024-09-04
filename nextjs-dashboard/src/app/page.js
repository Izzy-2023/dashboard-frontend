import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to the Homepage</h1>
    <Link href="/dashboard">Go to Dashboard</Link>
  </div>
);

export default Home;

