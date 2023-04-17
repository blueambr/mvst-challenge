import clsx from "clsx";
import Image from "next/image";

const buttonClasses =
  "grow border-b-[10px] px-5 pb-1 pt-[14px] text-lg font-medium leading-[22px] text-white transition hover:border-white focus:border-secondary md:grow-0 md:pt-5";

const Header = ({ active, setActive }) => {
  return (
    <header className="bg-primary pt-6 md:pt-0">
      <div className="container md:flex md:items-center">
        <div className="relative mx-auto h-[39px] w-[222px] md:mx-0 md:h-[29px] md:w-[105px]">
          <Image
            src="/logo.svg"
            fill
            sizes="(max-width: 767px) 222px, 39px, (min-width: 768px) 105px,29px"
            alt="Logotype"
          />
        </div>
        <nav className="mt-[10px] flex justify-center md:mt-0 md:grow">
          <button
            className={clsx(
              buttonClasses,
              active == "coffee" ? "border-secondary" : "border-transparent"
            )}
            type="button"
            onClick={() => setActive("coffee")}
          >
            Our Coffee
          </button>
          <button
            className={clsx(
              buttonClasses,
              active == "tea" ? "border-secondary" : "border-transparent"
            )}
            type="button"
            onClick={() => setActive("tea")}
          >
            Our Tea
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
