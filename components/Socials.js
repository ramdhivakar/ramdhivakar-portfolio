import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxFill} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/ramdhivakar'} className="hover:text-accent transition-all duration-300 ">
        <RiGithubFill />
      </Link>
      <Link href={'www.linkedin.com/in/ram--dhivakar'} className="hover:text-accent transition-all duration-300 ">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;

