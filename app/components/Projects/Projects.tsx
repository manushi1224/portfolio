import Image from "next/image";
import React from "react";
import greenThumb from "@/app/assets/green-thumb.png";
import blogBreeze from "@/app/assets/blogbreeze.png";
import ems from "@/app/assets/ems.png";
import style from "./project.module.css";
import { Github } from "../ui/SocialSvgs";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-10 p-24">
      <div className="flex flex-col content-center justify-center gap-4">
        <div className={`${style.projectContainer} rounded-3xl`}>
          <Image
            src={greenThumb}
            height={100}
            width={500}
            alt="green-thumb"
            className={style.projectImage}
            id="greenThumb"
          />
          <Link
            href="https://github.com/manushi1224/green-thumb"
            target="_blank"
            className={`${style.githubContainer} w-100 h-[100%] grid place-content-center`}
          >
            <Github />
          </Link>
        </div>
        <div className="text-xl text-center">GreenThumb</div>
      </div>
      <div className="flex flex-col content-center justify-center gap-4">
        <div className={`${style.projectContainer} rounded-3xl`}>
          <Image
            src={blogBreeze}
            height={100}
            width={500}
            alt="green-thumb"
            className={style.projectImage}
            id="blogBreeze"
          />
          <Link
            href="https://github.com/manushi1224/graphql-blogapp"
            target="_blank"
            className={`${style.githubContainer} w-100 h-[100%] grid place-content-center`}
          >
            <Github />
          </Link>
        </div>
        <div className="text-xl text-center">Blog Breeze</div>
      </div>
      <div className="flex flex-col content-center justify-center gap-4">
        <div className={`${style.projectContainer} rounded-3xl`}>
          <Image
            src={ems}
            height={100}
            width={500}
            alt="green-thumb"
            className={style.projectImage}
          />
          <Link
            href="https://github.com/manushi1224/employee-management-system"
            target="_blank"
            className={`${style.githubContainer} w-100 h-[100%] grid place-content-center`}
          >
            <Github />
          </Link>
        </div>
        <div className="text-xl text-center">Employee Management System</div>
      </div>
    </div>
  );
};

export default Projects;
