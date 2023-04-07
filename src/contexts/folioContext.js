import { createContext, useState } from "react";

const FolioContext = createContext({
  isDarkTheme: null,
});

export const FolioContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <FolioContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </FolioContext.Provider>
  );
};

export default FolioContext;
