import Header1 from "../hearder/Header1"
import Header2 from "../hearder/Header2"
import Header3 from "../hearder/Header3"
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Carte from "./test";





function Cart() {
  const [theme, colorMode] = useMode();
  return (
  
      <>
      
      <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
      
        <Box bgcolor={theme.
          // @ts-ignore
          palette.bg.main}>

            <Stack direction={"row"} justifyContent={"space-between"}>
              <Carte/>
          
            </Stack>


        </Box>
    
      </ThemeProvider>
    </ColorModeContext.Provider>
      
      
      </>
  )
}

export default Cart