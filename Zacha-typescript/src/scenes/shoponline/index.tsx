import { SelectedPage,ShopType } from "@/shared/types";
import image1 from "@/assets/image-1.jpeg"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Shope from "./shope";


const shopes: Array<ShopType> = [
   {
    id: '1',
    name:"ZACHA T-SHIRTS",
    description:"Upgrade your casual look with our newest trendy t-shirt collection. For just 280MAD",
    image: image1,
    category: 'tshirt',
  
   },
   {
    id: '2',
    name:"ZACHA HOODIES",
    description:"Experience ultimate comfort and style with our new hoodies.Stay warm with a touch of fashion, available now!  FOR JUST 300MAD",
    image: image1,
    category: 'hoodie',
    },
    
    
   
              ];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ShopOnline = ({setSelectedPage}: Props) => {
  return (
    <section id="shoponline" className="w-full bg-black py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ShopOnline)}
      >
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
      >
        <div className="md:w-3/5"> 
          <HText>OUR PRODUCTS</HText>
          <p className="text-primary-500">click on one of the images to by Tshirts or hoodies</p>
          <p className="py-5">
          Discover the latest in fashion with our curated collection. 
          Each piece is crafted with precision, offering unparalleled comfort and style.
           Elevate your wardrobe with our selection of premium clothing, designed to meet 
           the highest standards of quality and elegance. Explore our range and find the perfect 
           addition to your attire, ensuring you look and feel your best every day.
          </p>
        </div>
      </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[1100px] whitespace-nowrap ">
            {shopes.map((item: ShopType ,index) =>(
              <Shope
              key={`${item.name}-${index}`}
              id={item.id} 
              name={item.name}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}

          </ul>
        </div> 
      </motion.div>

    </section>  

  );
};

export default ShopOnline

