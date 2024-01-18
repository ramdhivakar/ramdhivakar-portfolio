import Image from "next/image";

const Bot = () => {
  return(
     <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src={'/bot.png'} 
        width={737} 
        height={678} 
        alt="" 
        className="translate-z-0 w-full h-full"
      />
     </div>
  );
};

export default Bot;
