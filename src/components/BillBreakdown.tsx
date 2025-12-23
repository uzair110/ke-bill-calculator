import {
    Card,
    CardContent,
    Typography,
    Divider,
    Stack,
    Box,
  } from "@mui/material";
  import type { BillingBreakdown } from "../utils/billing";

  interface Props {
    bill: BillingBreakdown;
  }

  export default function BillBreakdown({ bill }: Props) {
    return (
      <Card
        sx={{
          mt: 4,
          borderRadius: 0,
          backgroundColor: "white",
          border: "2px solid #000",
          overflow: "hidden",
        }}
        elevation={0}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#1a1a1a",
            p: 3,
            borderBottom: "4px solid #000",
          }}
        >
          <Typography variant="h4" fontWeight={900} color="white" letterSpacing={-0.5}>
            BILL BREAKDOWN
          </Typography>
        </Box>

        <CardContent sx={{ p: 5 }}>
          {/* Electricity Charges Section */}
          <Box mb={4}>
            <Typography
              variant="h6"
              fontWeight={900}
              mb={2}
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                borderBottom: "3px solid #000",
                pb: 1,
              }}
            >
              Electricity Charges
            </Typography>
            <Stack spacing={2}>
              <Row label="Variable Charges" value={bill.variableCharges} />
              <Row label="Fixed Charges" value={bill.fixedCharges} />
              <Row label="QTA" value={bill.qta} />
              <Row label="FCA" value={bill.fca} />
              <Row label="PHL" value={bill.phl} />
            </Stack>
          </Box>

          {/* Total Electricity Charges */}
          <Box
            sx={{
              p: 3,
              mb: 4,
              backgroundColor: "#f5f5f5",
              border: "2px solid #000",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight={900} textTransform="uppercase">
                Total Electricity Charges
              </Typography>
              <Typography variant="h5" fontWeight={900}>
                Rs. {bill.totalElectricityCharges.toFixed(2)}
              </Typography>
            </Stack>
          </Box>

          {/* Taxes & Duties Section */}
          <Box mb={4}>
            <Typography
              variant="h6"
              fontWeight={900}
              mb={2}
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                borderBottom: "3px solid #000",
                pb: 1,
              }}
            >
              Taxes &amp; Duties
            </Typography>
            <Stack spacing={2}>
              <Row label="Electricity Duty" value={bill.electricityDuty} />
              <Row label="Sales Tax" value={bill.salesTax} />
              <Row label="Income Tax" value={bill.incomeTax} />
              <Row label="KMC" value={bill.kmc} />
            </Stack>
          </Box>

          {/* Total Taxes & Duties */}
          <Box
            sx={{
              p: 3,
              mb: 4,
              backgroundColor: "#f5f5f5",
              border: "2px solid #000",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight={900} textTransform="uppercase">
                Total Taxes &amp; Duties
              </Typography>
              <Typography variant="h5" fontWeight={900}>
                Rs. {bill.taxesAndDuties.toFixed(2)}
              </Typography>
            </Stack>
          </Box>

          <Divider sx={{ my: 4, borderWidth: 2, borderColor: "#000" }} />

          {/* Total Bill */}
          <Box
            sx={{
              p: 4,
              backgroundColor: "#1a1a1a",
              border: "4px solid #000",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h4" fontWeight={900} color="white" letterSpacing={1}>
                TOTAL BILL
              </Typography>
              <Typography
                variant="h3"
                fontWeight={900}
                color="white"
              >
                Rs. {bill.totalBill.toFixed(2)}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    );
  }

  function Row({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) {
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          py: 1.5,
          px: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="body1" fontWeight={700} textTransform="uppercase" fontSize={14}>
          {label}
        </Typography>
        <Typography variant="body1" fontWeight={700} fontSize={16}>
          Rs. {value.toFixed(2)}
        </Typography>
      </Stack>
    );
  }
  