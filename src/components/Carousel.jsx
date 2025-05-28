import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
const DEFAULT_ITEMS = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white dark:text-black" />,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white dark:text-black" />,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white dark:text-black" />,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white dark:text-black" />,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white dark:text-black" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1; // Animate to clone.
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden sm:hidden p-2 ${round
        ? "rounded-full border border-white"
        : "rounded-[8px] "
        }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col sm:hidden ${round
                ? "items-center justify-center text-center bg-[#060606] border-0"
                : "items-start justify-between sm:hidden"
                } overflow-hidden cursor-grab active:cursor-grabbing sm:hidden`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
                <div className="project-card flex flex-col gap-4 text-center sm:hidden">
                                <div className="project-img rounded-[8px] shadow-cs2">
                                    <img src="props-card.png" alt="" className="project-image rounded-[8px] shadow-cs" />
                                </div>
                                <div className="project-card-text flex flex-col col-span-1 gap-2">
                                <p className="project-no text-[14px] text-[#737373]">Project#1</p>
                                <h2 className="project-name font-bold text-[20px] text-[#171717]">Modern</h2>
                                <p className="project-p text-[14px] text-[#737373]">As Uber works through a huge amount of internal management turmoil.</p>
                                </div>
                                <div className="project-btn-nom flex sm:flex-row flex-col-reverse items-center justify-center sm:justify-between gap-2">
                                    <a href="" className="project-card-btn px-3 sm:min-w-16 border-solid border-[1px] border-black rounded-[8px] font-semibold py-1.5 sm:px-4 text-[14px] sm:text-[18px]">View Project</a>
                                    <AvatarGroup spacing={36} className='flex items-center '>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    </AvatarGroup>
                                </div>

                </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full sm:hidden justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : "sm:hidden"
          }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8 sm:hidden">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 sm:hidden ${currentIndex % items.length === index
                ? round
                  ? "bg-white dark:bg-[#1D1D1D]"
                  : "bg-[#333333]"
                : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
