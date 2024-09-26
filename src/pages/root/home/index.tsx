import { Button } from '@common/components';
import { SectionHeader } from '@core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <SectionHeader title="Home" />
      <Link to="/projects">
        <Button>Projects</Button>
      </Link>
    </div>
  );
};

export default Home;
