import Link from "next/link";
import { RiGithubFill, RiLinkedinBoxFill} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300 ">
        <RiGithubFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300 ">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;

