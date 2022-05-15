import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/screens/routes";
import theme from "./src/global/styles/theme";

export default function App() {
    return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light"
        backgroundColor={theme.colors.background.primary}
      />
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </ThemeProvider>
  );
}
