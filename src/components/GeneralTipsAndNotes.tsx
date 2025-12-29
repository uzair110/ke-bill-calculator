import { Box, Typography } from "@mui/material";

export default function GeneralTipsAndNotes() {
  return (
    <Box mt={5}>
      {/* General Energy Saving Tips */}
      <Box
        sx={{
          p: 3,
          backgroundColor: "white",
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={900} mb={2} textTransform="uppercase">
          General Energy Saving Tips:
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            If you are Time of Use consumer, avoid appliance overlap during peak
            hours. Do not run AC, iron, microwave, washing machine simultaneously
            (especially 6–10 pm)
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            Switch OFF appliances at the socket (phantom load) - Standby Losses
            are usually 3% to 7% of monthly electricity usage.
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            Iron clothes once or twice a week instead of daily.
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            Operating washing machines on full loads and avoiding frequent partial
            cycles can reduce monthly electricity consumption by 8–12 units
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            Shifting appliance usage to off-peak hours can reduce electricity bills
            without reducing units consumed (for ToU consumers)
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500}>
            Setting your air conditioner temperature to 26°C instead of 22°C can
            save you around 40 to 45 units per month
          </Typography>
        </Box>
      </Box>

      {/* Note */}
      <Box
        sx={{
          p: 3,
          backgroundColor: "#fff",
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography variant="h6" fontWeight={900} mb={2} textTransform="uppercase">
          Note
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            The calculation is based on variable charges and fixed charges as
            applicable for FY 2026 as per SRO 1168.
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500} mb={1.5}>
            The estimation for FCA, QTA may change upon final decisions of NEPRA
          </Typography>
          <Typography component="li" variant="body2" fontWeight={500}>
            This is an estimation of your bill, actual bill may vary depending on
            actual units consumed and actualization of electricity charges (FCA,
            QTA, PHL etc.)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
