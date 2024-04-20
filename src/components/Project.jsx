import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/picbrarti.png";
import project2 from "../assets/images/portifolio.png";
import project3 from "../assets/images/rose.png";
import project4 from "../assets/images/agecalc.png";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/Defancee(14).jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "BR Architecture",
      github_link: "https://github.com/Roseuwizeye123/BR-ARCHITECTSPROJECT.git",
      live_link: "https://roseuwizeye123.github.io/BR-ARCHITECTSPROJECT/",
    },
    {
      img: project2,
      name: "My personal portfolio",
      github_link: "https://github.com/Roseuwizeye123/tailwindportfolio",
      live_link: "https://roseuwizeye123.github.io/tailwindportfolio/",
    },
    {
      img: project3,
      name: "my first portfolio",
      github_link: "https://github.com/Roseuwizeye123/mypersonalportfolio",
      live_link: "https://roseuwizeye123.github.io/mypersonalportfolio/",
    },
    {
      img: project4,
      name: "Age calculator",
      github_link:
        "https://github.com/Roseuwizeye123/age-calculator",
      live_link: "https://reacttailwindnavbar.netlify.apphttps://github.com/Roseuwizeye123/age-calculator",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
