import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MyApp from "./myapp";
import { Box, Button, Stack, Typography } from "@mui/material";
import Hand from "./assets/Vector.png";
import back from "./assets/Group.png";
import profile from "./assets/profile.png";
import rectangle from "./assets/Rectangle.png";
import handBase from "./assets/Vector 1.png";
import sideone from "./assets/Vector 3.png";
import bottomoneright from "./assets/Vector 5.png";
import bottomoneleft from "./assets/Vector 4.png";
import { FacebookRounded, LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { Reddit } from "@mui/icons-material";

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handleToggle = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  // create a darkTheme function to handle dark theme using createTheme
  const Theme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Stack position={"relative"}>
        <MyApp handleToggle={handleToggle} />
        <Stack
          position={"fixed"}
          top={"300px"}
          left={"150px"}
          zIndex={"9999999"}
          marginBottom={"80px"}
          spacing={"8px"}
        >
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <FacebookRounded />
          </Box>
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <Twitter />
          </Box>{" "}
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <Instagram />
          </Box>{" "}
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <Reddit />
          </Box>{" "}
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <Telegram />
          </Box>{" "}
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <GitHub />
          </Box>{" "}
          <Box borderRadius={"50px"} sx={{ cursor: "pointer" }}>
            <LinkedIn />
          </Box>{" "}
        </Stack>
        <Stack
          direction={"row"}
          width={"80%"}
          height={"80vh"}
          justifyContent={"space-between"}
          margin={"auto"}
          marginBottom={"80px"}
        >
          <Stack
            direction="column"
            width={"40%"}
            height={"fit-content"}
            margin={"auto"}
          >
            <Stack
              width={"150px"}
              height={"50px"}
              sx={{
                background: "linear-gradient(45deg, #32F6F6 30%, #A6A79F 90%)",
              }}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={"10px"}
              borderRadius={"25px 25px 25px 0px"}
            >
              <Typography variant="h5" color={"white"}>
                Hello!
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={"20px"}
              alignItems={"center"}
              marginY={"10px"}
            >
              <Typography variant="h4" fontWeight={"600"}>
                I'm
              </Typography>
              <Typography
                variant="h4"
                fontWeight={"700"}
                color={"grey"}
                sx={{ textDecoration: "underline", marginBottom: "5px" }}
              >
                Shivkant Dubey{"  "}
                <img src={Hand} alt={""} width={"40px"} height={"40px"} />
              </Typography>
            </Stack>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </Typography>
            <Stack direction={"row"} spacing={"20px"} marginTop={"50px"}>
              <Button
                sx={{
                  background:
                    "linear-gradient(45deg, #DF580C 30%, #FD993D 90%)",
                  color: "white",
                  fontWeight: "600",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              >
                Download CV
              </Button>
              <Button
                sx={{
                  background:
                    "linear-gradient(45deg, #434343 30%, #000000 90%)",
                  color: "white",
                  fontWeight: "600",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              >
                Get in Touch!
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              position: "relative",
              width: 400,

              height: 400,
              "& img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <img src={back} alt="" style={{ top: "40px", right: "18px" }} />
            <img
              src={profile}
              alt=""
              style={{ borderRadius: "250px 250px 250px 800px", width: "80%" }}
            />
          </Stack>
        </Stack>
        <Stack direction="row" height={"90vh"} position={""}>
          <Stack
            sx={{
              position: "relative",
              width: 450,

              height: 550,
              "& img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <img src={rectangle} alt="" style={{ zIndex: "9999" }} />
            <img src={handBase} alt={""} style={{ width: "100%" }} />
          </Stack>
          <Stack width={"60%"} p={"40px"} marginLeft={"40px"} height={"90%"}>
            <Stack width={"100%"} height={"fit-content"} margin={"auto"}>
              <Stack
                direction={"row"}
                marginBottom={"40px"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Typography variant="h3" width={"40%"}>
                  <span style={{ fontWeight: "bold" }}>T</span>his is it.{"   "}
                  ;)
                </Typography>
                <Box
                  width={"50%"}
                  borderBottom={"1px solid grey"}
                  marginBottom={"10px"}
                ></Box>
              </Stack>
              <Typography>
                Shivkant Dubey is an Indian{" "}
                <span style={{ fontWeight: "bold" }}>
                  UI/UX Designer & Front End Developer{" "}
                </span>
                with a passion for designing beautiful and fuctional user
                experiences. Typically, he’s Driven & permanently Curious. He’s
                obsessed with designing things and even more obsessed with
                designing cool & clean stuff for the web and mobile. He has been
                in the business of creating since he hung his first painting on
                the wall when he was 11.
                <br /> He holds a{" "}
                <span style={{ fontWeight: "bold" }}>
                  bachelor degree in Computer Applications
                </span>
                . During his graduation, he has been actively involved in the
                web design community for the last 3 years. he has designed
                websites for small businesses, events, nonprofits and more.
                Currently he’s based in Bihar,{" "}
                <span style={{ fontWeight: "bold" }}>India</span>. Where he’s
                working as an independent creative.
                <br />
                <br /> His interests, however, extend beyond the web and he
                loves helping people with branding and print design. He even
                loves designing{" "}
                <span style={{ fontWeight: "bold" }}>3D floor plan</span>.{" "}
                <br />
                <br /> When he’s not designing, he’s probably hanging out with
                his girlfriend, watching series, sketching or messing around on
                something inspired by YouTube tutorials.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              position: "relative",
              width: 250,

              height: 500,
              top: "80px",
              "& img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <img src={sideone} alt="" />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{
            position: "relative",
            width: "100%",

            height: "300px",
            justifyContent: "space-evenly",
            "& img": {
              height: "100%",
              position: "absolute",
              objectFit: "cover",
            },
          }}
        >
          <img
            src={bottomoneleft}
            alt=""
            style={{ width: "20%", bottom: "60px", left: "300px" }}
          />
          <img
            src={bottomoneright}
            alt=""
            style={{ right: "50px", bottom: "80px" }}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
