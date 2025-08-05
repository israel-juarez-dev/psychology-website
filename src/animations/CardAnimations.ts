// src/animations/cardAnimations.ts
import { Variants } from "framer-motion";

export const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

export const progressBar: Variants = {
  hidden: { 
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center"
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "left center",
    transition: {
      duration: 0.3
    }
  }
};

export const progressFill = (width: number): Variants => ({
  hidden: { 
    scaleX: 0,
    transformOrigin: "left center"
  },
  show: {
    scaleX: width,
    transformOrigin: "left center",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 60
    }
  }
});
export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  
  export const slideUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  

  
  