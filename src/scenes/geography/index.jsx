import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";


const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="Geography" subtitle="Simple geography chart"/>
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4">
                <GeographyChart/>
            </Box>
        </Box>
    )
}

export default Geography;