import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div>
      <h1>projects</h1>
      <Link to="/projects/create">create</Link>
    </div>
  );
};

export default ProjectList;
