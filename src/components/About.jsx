import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponents";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        As a dynamic and passionate 3D Animator and Video Editor, I bring to the
        table a rich blend of creativity, technical skill, and storytelling
        prowess.
        <br /> <br />
        My portfolio is a testament to my expertise in crafting visually
        stunning and emotionally resonant animations and videos. It features a
        diverse range of projects, including character-driven animations that
        breathe life into compelling narratives, architectural visualizations
        that showcase intricate details and realism, and innovative video edits
        that blend seamless transitions with a keen eye for pacing and rhythm.
        <br /> <br />
        Each piece in my portfolio not only demonstrates my technical abilities
        with industry-standard software but also reflects my commitment to
        pushing creative boundaries and delivering exceptional visual
        experiences.
        <br /> <br />
        My work is underpinned by a deep understanding of motion, timing, and
        visual storytelling, making me an ideal collaborator for projects that
        demand both artistic flair and technical precision.
      </motion.p>
      <div
        className="mt-20 flex flex-wrap gap-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
