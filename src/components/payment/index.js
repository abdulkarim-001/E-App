import { useTheme } from "@emotion/react";
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { useUIContext } from "../../context/ui"
import { Colors } from "../../styles/theme/index"

export default function Payment() {
    const { payment, setShowPayment, showPayment } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const paymentContent = payment.map(item => (
        <Box key={item.price}>
            <Box
                display="flex"
                sx={{ pt: 2, pb: 2 }}
                alignItems="center"
                justifyContent="space-between">

            </Box>

        </Box>
    ))

    return (
        <Drawer
            open={showPayment}
            anchor="right"
            PaperProps={{
                sx: {
                    width: 500,
                    background: Colors.light_gray,
                    borderRadius: 0
                }
            }}>
            {paymentContent}

        </Drawer>
    )

}