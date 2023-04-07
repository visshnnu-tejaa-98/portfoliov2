import React, { useContext } from "react";
import FolioContext from "../contexts/folioContext";

const Title = ({
  title,
  lightThemeTextColor,
  darkThemeTextColor,
  lightThemeBlockColor,
  darkThemeBlockColor,
  blockWidth,
}) => {
  const folioCtx = useContext(FolioContext);
  return (
    <div className="relative  my-5">
      <h1
        className={`text-5xl font-bold z-20`}
        style={{
          color: folioCtx.isDarkTheme
            ? darkThemeTextColor
            : lightThemeTextColor,
        }}
      >
        {title}
      </h1>
      <span
        className={`absolute right-0 bottom-[0rem] z-0 h-[0.75rem] opacity-50`}
        style={{
          backgroundColor: folioCtx.isDarkTheme
            ? darkThemeBlockColor
            : lightThemeBlockColor,
          width: blockWidth,
        }}
      ></span>
    </div>
  );
};

export default Title;
