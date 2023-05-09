import HeaderText from "@/shared/HeaderText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum harum id aperiam odio eligendi?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum harum id aperiam odio eligendi?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum harum id aperiam odio eligendi?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>more than just a gym</HeaderText>
          <motion.p
            className="my-5 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </motion.p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map(({ title, icon, description }: BenefitType) => (
            <Benefit
              key={title}
              title={title}
              icon={icon}
              description={description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 md:flex md:mt-28 items-center justify-between gap-20">
          {/* GRAPHIC */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />

          {/* DESCRIPTION */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                  <HeaderText>
                    millions of happy members getting{" "}
                    <span className="text-primary-500">fit</span>.
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
                sequi, nisi, ea ut, amet facilis modi fugiat nesciunt delectus
                voluptates repellendus beatae ipsa consectetur vero. Eveniet
                tempora amet ab! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Magnam laudantium nostrum quae asperiores
                consequuntur temporibus nam
              </p>
              <p className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                laudantium nostrum quae asperiores consequuntur temporibus nam
                aut itaque! Earum dolorum distinctio nemo non reiciendis? Quam
                vel cum minima at voluptatem.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
