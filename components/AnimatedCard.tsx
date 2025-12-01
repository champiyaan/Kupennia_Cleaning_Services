"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedCard({
  children,
  index = 0,
  delay,
  className = "",
}: AnimatedCardProps) {
  const animationDelay = delay !== undefined ? delay : index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: animationDelay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

