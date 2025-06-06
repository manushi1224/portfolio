import Image from "next/image";
import image from "@/app/assets/manushi-image.png";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className="space-y-10 p-10 lg:p-24">
      {/* <h2 className="text-5xl ps-24 font-semibold bg-gradient-to-r from-primary-300 to-accent-400 inline-block text-transparent bg-clip-text">
        About Me
      </h2> */}
      <div className="flex-col lg:flex-row flex justify-center gap-20">
        <div className="grid place-content-center">
          <Image
            src={image}
            width={300}
            height={300}
            alt="manushi-image"
            className="object-cover lg:w-[25rem] lg:h-[25rem]"
          ></Image>
        </div>
        <div className="lg:w-[50%] grid place-content-center text-justify gap-4 lg:gap-8">
          <h2 className=" text-xl lg:text-3xl ">
            Yep thats me, youre probably wondering how I ended up in this
            situation...
          </h2>
          <span className="tracking-wide">
            Well Hello! I&apos;m Manushi Oza, a dedicated and enthusiastic
            individual with a passion for Full Stack Development. I&apos;m
            currently pursuing a Bachelor&apos;s degree in Computer Engineering
            at LJ University.
          </span>
          <span>
            In addition to my studies, I am currently working as a Full Stack
            Intern at 200OK Solutions. This role allows me to apply what
            I&apos;ve learned in a real-world setting, tackling challenges and
            contributing to exciting projects.
          </span>
          <span>
            Balancing my academic and professional life has taught me the
            importance of time management, teamwork, and continuous learning.
            I&apos;m always eager to take on new challenges and expand my
            knowledge, and I believe that my current experiences are laying a
            strong foundation for a successful career in Software Engineering.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
