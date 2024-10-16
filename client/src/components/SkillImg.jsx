import PropTypes from "prop-types";

const SkillImg = ({ src, alt, className }) => {
  return (
    <img
      className={`${className} h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-36 lg:w-36`}
      src={src}
      alt={alt}
    />
  );
};

SkillImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default SkillImg;
