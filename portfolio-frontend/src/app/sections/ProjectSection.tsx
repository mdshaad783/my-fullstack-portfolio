import React from 'react';
import Section from '@/components/global/Section';
import ParallaxStack from '@/components/projects/ParallaxStack';
// import linux from '@/assets/icons/skill/skill-icons--linux-light.svg';
import projectImage1 from '@/assets/images/projects/1.png';
import projectImage2 from '@/assets/images/projects/2.png';
import projectImage3 from '@/assets/images/projects/3.png';
import projectImage4 from '@/assets/images/projects/4.png';
import projectImage5 from '@/assets/images/projects/5.png';
import { StaticImageData } from 'next/image'; // Correct type for static images

// Define the type for a project
interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData; // Use StaticImageData for imported images
    color: string;
    techUsed: string[];
    demoLink: string;
    codeLink: string;
}

// Array of projects
const projects: Project[] = [
    {
        id: 1,
        title: 'Harmoniq - Music Player App',
        description:
            'Harmoniq is a client-side scripted music player that plays songs from client-server instead of web server with a smooth user experience supporting features like pause or paly a song, change a song, volume-slider and many more. It is purely built with JavaScript without using any frameworks or libraries.',
        image: projectImage1,
        color: 'bg-card',
        techUsed: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '',
        codeLink: 'https://github.com/mdshaad783/Harmoniq_mp.git',
    },
    {
        id: 2,
        title: 'Weatherium - Live Weather Updates',
        description:
            'Weatherium is a real-time weather forecasting application that provides users with up-to-date weather conditions, temperature, humidity, wind speed, and more. It features a sleek UI, location-based weather updates, and supports multiple cities worldwide.',
        image: projectImage2,
        color: 'bg-card',
        techUsed: ['JavaScript', 'Open Weather Api'],
        demoLink: '',
        codeLink: 'https://github.com/mdshaad783/weather_webapp.git',
    },
    {
        id: 3,
        title: 'Typing - Speed test web app',
        description:
            'It is a typing-speed test web application that determins the typing speed in words-per-minute from a random sentence and also finds out the number of errors. It is built with pure JavaScript.',
        image: projectImage3,
        color: 'bg-card',
        techUsed: ['HTML', 'CSS', 'Javscript'],
        demoLink: '',
        codeLink: 'https://github.com/mdshaad783/typingspeed_webapp.git',
    },
    {
        id: 4,
        title: 'To-do List - Task Manager',
        description:
            'A task manager that schedules my further task, works as a task reminder and help me to manage my tasks.It is built with Django in backend providing user features like adding their tasks to do, viewing their tasks, deleting or updating their tasks.',
        image: projectImage4,
        color: 'bg-card',
        techUsed: ['Python', 'Django'],
        demoLink: '',
        codeLink: 'https://github.com/mdshaad783/to-do_list.git',
    },
    {
        id: 5,
        title: 'Shaad Footwear - Ecommerce Website',
        description:
            'Shaad Footwear – Currently in development phase, I am developing a responsive e-commerce platform for footwear to browse & purchase latest collection of footwears. Features include secure authentication, dynamic product management, in-built payment-integration & an interactive UI with smooth animations. It is a MERN project built with React, Tailwind CSS, Node.js, Express.js, and MongoDB. 🚀',
        image: projectImage5,
        color: 'bg-card',
        techUsed: ['React js', 'Node Js', 'Mongodb', 'Express js'],
        demoLink: '',
        codeLink: 'https://github.com/mdshaad783/shaad_footwear.git',
    },
];

const ProjectSection: React.FC = () => {
    return (
        <div className="relative">
            {/* Main Section */}
            <Section className={'py-10 relative'}>
                <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full z-10">
                    <h1>Projects</h1>
                    <p>
                        Explore a collection of my projects that showcase my skills in web
                        development, problem-solving, and creating user-friendly applications. Each
                        project is built with modern technologies and designed to deliver a seamless
                        user experience.
                    </p>
                </div>

                {/* Parallax Stack */}
                <div>
                    <ParallaxStack projects={projects as Project[]} />
                </div>

                {/* Gradient Blur Effect */}
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
        </div>
    );
};

export default ProjectSection;
