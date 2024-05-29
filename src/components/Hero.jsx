import { motion } from "framer-motion";
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] ml-[225px]" />
          <div className="w-2 sm:h-80 h-20 violet-gradient mt-[380px] ml-[5px]" />
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white mt-[70px] ml-[80px] sm:mt-[40px] sm:ml-[10px] text-4xl sm:text-2xl`}>
  Hi, I am <span className="text-[#915eff]">Steve</span>
</h1>

<p className={`${styles.heroSubText} mt-10 ml-10 sm:ml-4 text-white-70 sm:text-sm`}>
  I am a web developer and<br className="sm:block hidden" /> a Three.js/3D developer
</p>

        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
