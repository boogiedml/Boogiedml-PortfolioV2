import { SocialMedia } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    const lightBgColor =
      idName === "boogiedml" || idName === "skills"
        ? "bg-[#4732D3]"
        : idName === "about" || idName === "contact"
        ? "bg-[#F9F9F9]"
        : "";

    return (
      <div
        id={idName}
        className={`w-full relative ${lightBgColor} dark:bg-transparent ${className}`}
      >
        <SocialMedia idName={idName} />
        <div
          className={`${
            idName === "boogiedml" ? "py-12" : "py-16"
          } px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36`}
        >
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
