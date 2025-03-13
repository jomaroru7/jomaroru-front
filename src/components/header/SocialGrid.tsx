
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialGrid: React.FC = () => {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/jomaroru" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-purple-400">
        <FaLinkedin size={32} />
      </a>
      <a href="https://github.com/jomaroru7" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-purple-400">
        <FaGithub size={32} />
      </a>
    </div>
  );
};

export default SocialGrid