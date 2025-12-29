import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function UnderstandBillDialog({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 0,
            border: (theme) => `4px solid ${theme.palette.primary.main}`,
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: (theme) => theme.palette.primary.dark,
          color: "white",
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight={900} letterSpacing={-0.5}>
          ⚡ UNDERSTANDING YOUR ELECTRICITY BILL
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 4, backgroundColor: "#fff" }}>
        <Typography variant="body1" fontWeight={500} mb={4} mt={2}>
          Your electricity bill is made up of customer category, energy charges,
          government levies, and adjustments. Knowing these helps you understand
          why your bill changes every month.
        </Typography>

        {/* Customer Categories */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={2}
          sx={{ borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`, pb: 1 }}
        >
          👤 CUSTOMER CATEGORIES
        </Typography>

        <Box mb={4}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Lifeline Customers
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Non-Time of Use (Non-ToU) residential customers have a single-phase
              electric connection with sanction load up to 1 KW.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Maximum of last twelve months and current month's consumption less
              than or equal to 100 units
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Lowest tariff to protect low-income households
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              No Peak / Off-Peak billing
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              No impact fuel and quarterly adjustments
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Protected Customer
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Non-Time of Use (Non-ToU) residential customers consuming less than
              or equal to 200 units per month consistently for past 6 months.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Monthly consumption between 0–200 units for past 6 months.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Subsidized tariff compared to normal consumers
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Non-Peak / Off-Peak billing
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Tariffs increase gradually.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Positive Fuel Charges Adjustments and all kind of Quarterly Tariff
              Adjustments apply.
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Normal Customer
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Monthly consumption is above 200 units
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Higher exposure to fuel and quarterly adjustments
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Can be Time of Use (ToU) or Non-Time of Use (Non-ToU)
            </Typography>
          </Box>
        </Box>

        <Box mb={4} sx={{ backgroundColor: "white", p: 3, border: (theme) => `2px solid ${theme.palette.primary.main}` }}>
          <Typography variant="h6" fontWeight={800} mb={2} textTransform="uppercase">
            Time of Use (ToU) Customers
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Electricity charged at different rates:
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Peak Hours → higher rates
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Off-Peak Hours → lower rates
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Units remain the same, but bill amount depends on usage timing
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Common for higher-consumption households
            </Typography>
          </Box>
          <Box sx={{ border: (theme) => `2px solid ${theme.palette.primary.main}`, backgroundColor: "white" }}>
            <Stack direction="row" sx={{ borderBottom: (theme) => `2px solid ${theme.palette.primary.main}` }}>
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}`, backgroundColor: (theme) => theme.palette.primary.dark }}>
                <Typography fontWeight={900} color="white" textAlign="center">
                  PERIOD
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}`, backgroundColor: (theme) => theme.palette.primary.dark }}>
                <Typography fontWeight={900} color="white" textAlign="center">
                  PEAK TIME
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2, backgroundColor: (theme) => theme.palette.primary.dark }}>
                <Typography fontWeight={900} color="white" textAlign="center">
                  OFF-PEAK TIME
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" sx={{ borderBottom: (theme) => `2px solid ${theme.palette.primary.main}` }}>
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}` }}>
                <Typography fontWeight={700} textAlign="center">
                  April to October
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}` }}>
                <Typography fontWeight={700} textAlign="center">
                  6:30 PM to 10:30 PM
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Typography fontWeight={700} textAlign="center">
                  Remaining Hours
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row">
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}` }}>
                <Typography fontWeight={700} textAlign="center">
                  November to March
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2, borderRight: (theme) => `2px solid ${theme.palette.primary.main}` }}>
                <Typography fontWeight={700} textAlign="center">
                  6:00 PM to 10:00 PM
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Typography fontWeight={700} textAlign="center">
                  Remaining Hours
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Core Electricity Charges */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={2}
          sx={{ borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`, pb: 1 }}
        >
          💡 CORE ELECTRICITY CHARGES
        </Typography>

        <Box mb={3}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Variable (Energy) Charges
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Based on units consumed (kWh)
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Major portion of your bill
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Currently Applicable as per SRO 1168
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Fixed Charges
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Charged even if consumption is low
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Covers for network maintenance, metering, capacity costs.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Depends on Sanction Load, Consumer Category and Units Consumed
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Adjustments & Surcharges */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={2}
          sx={{ borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`, pb: 1 }}
        >
          🔄 ADJUSTMENT & SURCHARGES
        </Typography>

        <Box mb={3}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Fuel Cost Adjustment (FCA)
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Monthly adjustment
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Reflects actual fuel cost vs approved fuel cost
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Can be positive or negative
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Applied after consumption month
            </Typography>
          </Box>
        </Box>

        <Box mb={3}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            Quarterly Tariff Adjustment (QTA)
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Periodic adjustment of XW-DISCOs also being charged to KE Customers
              as per Government & NEPRA directions.
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Covers:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Typography component="li" variant="body2" fontWeight={500}>
                Capacity payments
              </Typography>
              <Typography component="li" variant="body2" fontWeight={500}>
                Exchange rate variation
              </Typography>
              <Typography component="li" variant="body2" fontWeight={500}>
                Interest costs
              </Typography>
            </Box>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Spread over multiple months
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" fontWeight={800} mb={1.5} textTransform="uppercase">
            PHL Surcharge
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              "Power Holding Limited" surcharge
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Used to recover historic power sector debt of XW-DISCOs
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Fixed per-unit charge
            </Typography>
            <Typography component="li" variant="body2" mb={1} fontWeight={500}>
              Applies to all consumers except Lifeline.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Government Taxes */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={2}
          sx={{ borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`, pb: 1 }}
        >
          🏛️ GOVERNMENT TAXES & DUTIES
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            Sales Tax (18% of Total Electricity Charges + ED)
          </Typography>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            Electricity Duty (ED) (1.5% of Total Electricity Charges)
          </Typography>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            Income Tax (7.5% of Total Electricity Charges, ED and Sales Tax if
            you are a non-filer with bill higher than PKR 25,000)
          </Typography>
        </Box>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Key Things to Remember */}
        <Typography
          variant="h5"
          fontWeight={900}
          mb={2}
          sx={{ borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`, pb: 1 }}
        >
          📌 KEY THINGS TO REMEMBER
        </Typography>

        <Box component="ul" sx={{ pl: 3 }}>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            Units × Tariff ≠ Final Bill
          </Typography>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            Fuel prices, taxes, and adjustments can change bills even if units
            stay the same
          </Typography>
          <Typography component="li" variant="body2" mb={1} fontWeight={500}>
            TOU consumers can reduce bills by shifting usage, not just reducing
            units
          </Typography>
        </Box>

        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.dark,
              color: "white",
              fontWeight: 900,
              px: 5,
              py: 1.5,
              borderRadius: 0,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
              },
            }}
          >
            CLOSE
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
