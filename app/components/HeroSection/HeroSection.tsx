import Link from "next/link";
import { Github, LinkedIn, Mail } from "../ui/SocialSvgs";

function HeroSection() {
  return (
    <div className="relative px-6 lg:px-8 pb-6">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-52 flex justify-center">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white sm:text-7xl uppercase tracking-wider font-accent">
            Manushi Oza
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-body max-w-3xl tracking-wide">
            I&apos;m an Aspiring Software Engineer from Ahmedabad, India.
            I&apos;m a Full Stack Developer with a passion for Frontend
            Development. I love to create beautiful and responsive websites.
          </p>
          <div className="flex justify-center gap-x-6 mt-8">
            <Link href="https://github.com/manushi1224" target="_blank">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/manushi-oza-704594231/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link href="mailto:manushi2003@gmail.com">
              <Mail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
