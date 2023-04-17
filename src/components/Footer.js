import Image from "next/image";

const Footer = () => {
  return (
    <header className="py-10">
      <div className="container flex justify-center gap-2">
        <div className="font-xs font-normal text-primary">Made with</div>
        <Image src="/love.png" width="36" height="17" alt="Love" />
      </div>
    </header>
  );
};

export default Footer;
