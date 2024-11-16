import { Link } from "react-router-dom";

type Props = {
    id: string;
    name: string;
    description?: string;
    image: string;
    category: string;
}

const shope = ({id,name, description, image}: Props) => {
    const overlayStyles =`p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
    
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <Link to={`/product/${id}`}>
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
            <img alt={`${image}`} 
            src={image} 
            className="h-full w-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            />
      </Link>
    </li>
  );
};

export default shope;