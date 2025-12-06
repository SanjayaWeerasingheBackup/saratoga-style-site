import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Heritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="story" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-gold tracking-wide-luxury text-xs uppercase mb-6 font-sans">
            Since 1872
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
        >
          Our Heritage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Born in the foothills of the Adirondacks, Saratoga® Spring Water has pursued 
          the art of water for over 150 years. We believe in curated, meaningful choices 
          regarding our water and how we show up on tables and in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 w-16 h-px bg-border mx-auto"
        />
      </div>
    </section>
  );
};

export default Heritage;