import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./theme";
import { Stack } from "@mui/material";
import Logo from "./assets/Logo.svg";

export default function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Stack
        width={"full-width"}
        sx={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid black"}
          width={"100%"}
        >
          <Stack direction={"row"} spacing={2} border={"1px solid pink"}>
            <Box>
              <img src={Logo} width={"20px"} alt="logo" />
            </Box>
            <Box fontFamily={"Segoe UI"} fontWeight={"bold"}>
              SHIVKANT DUBEY
            </Box>
          </Stack>
          <Stack direction={"row"} spacing={4} alignItems={"center"}>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              fontWeight={"600"}
            >
              <Box>Home</Box>
              <Box>About</Box>
              <Box>Resume</Box>
              <Box>Skills</Box>
              <Box>Projects</Box>
              <Box>Contact</Box>
            </Stack>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Stack>
        </Stack>
        
      </Stack>
    </>
  );
}
