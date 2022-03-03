import React, { useContext } from "react";
import ThemeModeContext from "../../contexts";
import "./ThemeSelector.less";

export const ThemeSelector = () => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  return (
    <div>
      <button onClick={toggleThemeMode}>Theme Change</button>
    </div>
  );
};
