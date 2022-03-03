import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { SideBarState } from "src/Store/states/SideBarState";
import { SideBarReducer } from "src/Store/reducers/SideBarReducer";
import { SideBarAction } from "src/Store/actions/SideBarAction";

const getInitialState = (): SideBarState => ({
  open: true,
});
export const SideBarContext = createContext<
  [SideBarState, Dispatch<SideBarAction>]
>([getInitialState(), () => null]);

interface Props {
  children: React.ReactNode;
  state?: SideBarState;
}
export const SideBarProvider: React.FC<Props> = ({ children, state }) => {
  const initialState = state ?? getInitialState();
  return (
    <SideBarContext.Provider value={useReducer(SideBarReducer, initialState)}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useAppStateContext = () => useContext(SideBarContext);
