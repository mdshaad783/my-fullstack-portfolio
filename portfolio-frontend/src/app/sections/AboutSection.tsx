import Section from '@/components/global/Section';
import Image from 'next/image';
import profile1 from '@/assets/images/profile1.jpg';
import AnimatedText from '@/components/global/ScrollFadeParagraph';
import HugeiconsUniversity from '@/assets/icons/HugeiconsUniversity';
import * as motion from 'motion/react-client';

const aboutText = `Hi, I’m Md Shaad Rehan, a passionate and detail-oriented MERN Stack Developer with expertise in building dynamic, responsive, and user-friendly web applications. Proficient in React, Redux, Node.js, Express, MongoDB, and Mongoose as well as Django I specialize in crafting seamless full-stack solutions. My skill set also includes modern front-end technologies like Tailwind CSS, Bootstrap, JavaScript, HTML, and CSS, ensuring visually appealing and efficient designs.With a strong foundation in Web development, I have also deepen my roots in Software development with Python. I consider my self responsible and orderly person. Let’s build something amazing together!`;

const AboutSection = () => {
    return (
        <Section className="relative py-10">
            <div className="flex max-mobile-lg:flex-col-reverse justify-start items-stretch gap-2 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="bg-primary/5 border border-border rounded-lg p-4"
                >
                    <h1 className=" mb-3">About me</h1>
                    <AnimatedText
                        wordClass=" text-xl max-mobile-lg:!text-lg"
                        motionClass="text-primary !text-xl max-mobile-lg:!text-lg"
                        text={aboutText}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="bg-card flex flex-col max-mobile-lg:flex-row gap-2 rounded-lg p-4 border border-border"
                >
                    <div className="w-60 h-60">
                        <Image
                            src={profile1}
                            alt="Md Shaad Rehan"
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span>mdshaad783@gmail.com</span>
                        <span>+91-9334342004</span>
                        <span>Bhopal, India</span>
                    </div>
                </motion.div>
            </div>

            <div className="py-5">
                <h1 className="py-2">Education</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    className="flex max-mobile-lg:flex-col justify-between bg-card p-4 border border-border rounded-lg"
                >
                    <div className="flex gap-2">
                        <div className="border-l-4 border-primary pl-2">
                            <h3>Bachelor in Computer Science and Engineering</h3>
                            <span className="flex items-center gap-2">
                                <HugeiconsUniversity /> Technocrats Institute of Technology & Science, Bhopal
                            </span>
                        </div>
                    </div>
                    <div className="max-mobile-lg:mt-2">
                        <span>2021 - 2025</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute top-0 inset-0 blur-[120px] -z-10">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                    }}
                    className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
                />
            </div>
        </Section>
    );
};

export default AboutSection;
