import Image from "next/image";
import about from "../../public/images/about.png";
const About = () => {
  return (
    <div className="py-24 overflow-hidden relative" id="about">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
            <div className="inset-0 absolute rounded-2xl bg-primary/10 blur-2xl" />
            <div className="w-[85%] h-[85%] relative">
              <Image
                src={about}
                alt="About"
                fill
                className=" z-10 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I am a passionate developer with experience in creating modern web applications. I enjoy solving complex problems and turning ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
