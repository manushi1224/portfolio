import blogBreeze from "@/app/assets/blogbreeze.png";
import bookthetic from "@/app/assets/bookthetic.png";
import chatify from "@/app/assets/chatify.png";
import ems from "@/app/assets/ems.png";
import greenThumb from "@/app/assets/green-thumb.png";
import Image from "next/image";
import Link from "next/link";
import { Github } from "../ui/SocialSvgs";
import style from "./project.module.css";

const Projects = () => {
  return (
    <div className="p-24 space-y-10">
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-primary-300 to-accent-400 inline-block text-transparent bg-clip-text">
        My Work
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center">
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
          <div className="text-center">
            <h3 className="text-xl">GreenThumb</h3>
            {/* <p>Your friendly neighborhood botanist! 🤖 Built with Gemini api</p> */}
          </div>
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
          <div className="text-center">
            <h3 className="text-xl">Blog Breeze</h3>
            {/* <p>Your friendly neighborhood botanist! 🤖</p> */}
          </div>
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
        <div className="flex flex-col content-center justify-center gap-4">
          <div className={`${style.projectContainer} rounded-3xl`}>
            <Image
              src={bookthetic}
              height={100}
              width={500}
              alt="bookthetic"
              className={style.projectImage}
            />
            <Link
              href="https://github.com/manushi1224/e-book-store"
              target="_blank"
              className={`${style.githubContainer} w-100 h-[100%] grid place-content-center`}
            >
              <Github />
            </Link>
          </div>
          <div className="text-xl text-center">Bookthetic</div>
        </div>
        <div className="flex flex-col content-center justify-center gap-4">
          <div className={`${style.projectContainer} rounded-3xl`}>
            <Image
              src={chatify}
              height={100}
              width={500}
              alt="chatify"
              className={style.projectImage}
            />
            <Link
              href="https://github.com/manushi1224/chatify"
              target="_blank"
              className={`${style.githubContainer} w-100 h-[100%] grid place-content-center`}
            >
              <Github />
            </Link>
          </div>
          <div className="text-xl text-center">Chatify</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
