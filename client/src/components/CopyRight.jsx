import moment from "moment-timezone";

const CopyRight = () => {
  const currentYear = moment().get("year");

  return (
    <>
      <div className="copyright">
        <p className="text-sm text-[#CCF381] dark:text-[#9A9A9A] font-outfit text-center">
          © {currentYear} Boogiedml All rights reserved.
        </p>
      </div>
      <div className="hidden text-base text-[#CCF381] dark:text-[#9A9A9A] font-outfit md:flex gap-6 mb-4">
        <a
          className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
          href="https://twitter.com/boogiedml"
          target="_blank"
        >
          TW
        </a>
        <a
          className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
          href="https://github.com/boogiedml"
          target="_blank"
        >
          GH
        </a>
        <a
          className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
          href="https://www.linkedin.com/in/sherifdeen-ishola-mern-stack-web-developer/"
          target="_blank"
        >
          LN
        </a>
        <a
          className="hover:transform hover:-translate-y-0.5 transition-all duration-300"
          href="https://www.instagram.com/boogiedml/"
          target="_blank"
        >
          IG
        </a>
      </div>
    </>
  );
};

export default CopyRight;
