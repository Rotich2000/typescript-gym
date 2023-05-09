import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeaderText from "@/shared/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = "w-full rounded-lg bg-dark px-5 py-3 placeholder-white mb-5 transition duration-500 focus:bg-slate-300 outline-none";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="flex-col items-center md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">join now</span> to get in shape
          </HeaderText>
          <motion.p
            className="my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea esse
            quo adipisci inventore architecto cumque eveniet, nam saepe magnam.
            Molestias, doloribus maiores sunt nobis quisquam beatae aliquid
            sequi sapiente officia!
          </motion.p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/d21a16ea2876db558a80a3ec5025e8d0"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter your name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required!"}
                  {errors.name.type === "maxLength" &&
                    "Maximum length is 100 characters!"}
                </p>
              )}

              <input
                type="email"
                className={inputStyles}
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required!"}
                  {errors.email.type === "pattern" &&
                    "Invalid email address!"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Give us your Feedback"
                {...register("message", {
                    required: true,
                    maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "This field is required!"}
                    {errors.message.type === "maxLength" && "Maximum length is 2000 characters!"}
                </p>
              )}

              <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext before:absolute before:-bottom-20 before:-right-10 w-full before:z-[-1]">
                <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
