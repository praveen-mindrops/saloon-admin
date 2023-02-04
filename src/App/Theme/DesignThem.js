export const getDesignTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            light: "#93a5ff",
            main: "#556ee6",
            dark: "#485ec4",
          },
          secondary: {
            light: "#ffa726",
            main: "#EA6823",
            dark: "#fb8c00",
          },
          contras: {
            main: "#000000",
          },
          current: {
            main: "#ffffff",
          },
          disable: {
            light: "#8b8e9d",
            main: "#74788d",
            dark: "#636678",
            contrastText: "#fff",
          },
          background: {
            default: "#f8f8fb",
            dark: "#2a3042",
            navBar: "#ffffff",
            card: "#d4dbf9",
            card2: "#eff2f7",
          },
          icon: {
            green: "#34c38f",
            warning: "#f1b44c",
            error: "#f46a6a",
            sidebar: "#a6b0cf",
            sidebar1: "#ffffff",
          },
          text: {
            normal: "#00000099",
            primary: "#495057",
            secondary: "#74788d",
            contrasPrimary: "#ffffff",
            contrasSecondary: "#ffffff88",
          },
          border: {
            main: "#eff2f7",
            primary: "#495057",
            scroll: " #666e7c",
          },
          shadow: {
            navBar: "#12263f08",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#EA6823",
          },
          secondary: {
            main: "#000",
          },
          background: {
            default: "#222736",
          },
        }),
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  selected: {},
});
