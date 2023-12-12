import { motion, useTransform, useMotionValue } from "framer-motion";

const pages = [1, 2, 3, 4, 5];

export function Example(props) {
    const x = useMotionValue(0)
    const opacity = useTransform(x, [-800, 0, 800], [1, 1, 1]);
    const scale = useTransform(x, [-800, 0, 800], [1, 1, 1]);
    //const x = useTransform(offset, [-1, 0, 1], [20, 0, -20]);
    /*
    opacity, scale, x 
    */
    return (
        <motion.div
            className="flex-row"
            width={1000}
            height={1000}
            radius={30}
            center
            initial={{
                opacity: 0,
                scale: 0,
            }}
            whileInView={{
                opacity: 1,
                scale: 1.2,
            }}
            gap={0}
            style={{
                maxWidth: 500,
            }}
        >
            {pages.map((index) => {
                return (
                    <motion.div
                        drag="x"
                        dragElastic={1}
                        style={{
                            minWidth: 1600,
                            height: 500,
                            borderRadius: 30,
                            backgroundColor: "#000",
                            marginRight: 10,
                            opacity, scale, x 
                        }}
                        key={index}
                    />
                );
            })}
        </motion.div>
    );
}
