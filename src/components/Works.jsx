import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full"
      >
        <div className="relative w-full h-[360px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-top rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>

        </div>
        <div className="flex flex-wrap justify-between mt-2 flex flex-wrap gap-2">
          <h4 className="font-bold"> Features :</h4>
        
          {description.map((des_title,index) => (
            <small
            className="d-block w-full"
              key={index}
              
            >
             {des_title.name}
            </small>
          ))}
           
            
        </div>
        <div className="">
        <h4 className="font-bold mt-3">Project Link :
           
           </h4>
           <small> <a className="text-blue-300" target="__" href="https://hotelroyalimage.com.np/">https://hotelroyalimage.com.np/</a></small>
        </div>

        <div className="flex flex-wrap justify-between mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (   
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}style={{ width: '47%' }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
