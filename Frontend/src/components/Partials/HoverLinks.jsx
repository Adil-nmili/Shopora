import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";  

const HoverLinks = ({title,links=[]}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="font-semibold">{title}</HoverCardTrigger>
      <HoverCardContent className='border-[#F2F2F2] text-[#2D2D2D] bg-[#F2F2F2]'>
        The React Framework – created and maintained by @vercel. <br/>
        <div className="gap-2 flex flex-wrap">

        {
          links.map((link,index) => (
            <Link to={"#"+link} key={index}>{link}</Link>
          ))
        }
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverLinks;
