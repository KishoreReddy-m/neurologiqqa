import React from "react";
export const DialogContext = React.createContext("");

interface Props {
  children: React.ReactNode;
}
export const DialogProvider: React.FC<Props> = ({ children }) => {
  return <DialogContext.Provider value="">{children}</DialogContext.Provider>;
};
