import React, { useMemo, useState } from "react";
import "./App.less";
import { Button, Container, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeModeContext from "./contexts";
import { LIGHT_MODE_THEME, DARK_MODE_THEME } from "./utils/constants";
import { getAppTheme } from "./styles/theme";
import SideBar from "./components/MainLayout/SideMenu/SideBar";
import { Route, Switch, Router } from "react-router-dom";
import ForgotPassword from "./components/LoginLayout/ForgotPassword";
import EmailVerifyPage from "./components/LoginLayout/EmailVerify";
import LoginLayout from "./components/LoginLayout";
import history from "./common/history";
import Notfoundpage from "./pages/NotFound/Notfoundpage";
import { SideBarProvider } from "./contexts/SideBarContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";

const App: React.VFC = () => {
  const [mode, setMode] = useState<
    typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
  >(DARK_MODE_THEME);
   console.log('app Mode', mode);
  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        localStorage.setItem(
          "mode",
          mode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME
        );
        setMode((prevMode:any) =>
          prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME
        );
      },
    }),
    [mode]
  );
  const queryClient = new QueryClient();
  const theme = useMemo(() => getAppTheme(mode), [mode]);
  return (
    <QueryClientProvider client={queryClient}>
      <SideBarProvider>
        <ThemeModeContext.Provider value={themeMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="background-image" color="background"></div>
            <Container maxWidth="xl" className="root root-conatainer">
              {/* <SideBar/> */}
              {/* <ThemeSelector /> */}
              <Router history={history}>
                <Switch>
                  <Route exact path="/" component={LoginLayout} />
                  <Route exact path="/verify-user" component={EmailVerifyPage} />
                  <Route
                    exact
                    path="/forgot-password"
                    component={ForgotPassword}
                  />
                  <PrivateRoute exact path="/app/*" component={SideBar} />
                  <Route component={Notfoundpage} />
                  <PrivateRoute to="/app/" />
                </Switch>
              </Router>
            </Container>
          </ThemeProvider>
        </ThemeModeContext.Provider>
      </SideBarProvider>
    </QueryClientProvider>
  );
};

export default App;
