import { useState } from "react";
import {
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import { Info } from "@mui/icons-material";
import { calculateBill, type BillingBreakdown } from "./utils/billing";
import BillBreakdown from "./components/BillBreakdown";
import EnergySavingTips from "./components/EnergySavingTips";
import UnderstandBillDialog from "./components/UnderstandBillDialog";
import GeneralTipsAndNotes from "./components/GeneralTipsAndNotes";

type ConsumerType = "normal" | "protected";

interface FormState {
  consumerType: ConsumerType;
  lifeline: boolean;
  incomeTaxExempt: boolean;
  timeOfUse: boolean;
  units: number;
}

export default function App() {
  const [state, setState] = useState<FormState>({
    consumerType: "normal",
    lifeline: false,
    incomeTaxExempt: false,
    timeOfUse: false,
    units: 0,
  });
  const [bill, setBill] = useState<BillingBreakdown | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCalculate = () => {
    const result = calculateBill({
      units: state.units,
      consumerType: state.consumerType,
      isLifeline: state.lifeline,
      isTimeOfUse: state.timeOfUse,
      isIncomeTaxExempt: state.incomeTaxExempt,
    });
    setBill(result);
  };

  const handleConsumerTypeChange = (type: ConsumerType) => {
    setState(prev =>
      type === "protected"
        ? {
            ...prev,
            consumerType: "protected",
            lifeline: false,
            incomeTaxExempt: true,
            timeOfUse: false,
            units: Math.min(prev.units, 200),
          }
        : {
            ...prev,
            consumerType: "normal",
            lifeline: false,
            incomeTaxExempt: false,
            timeOfUse: false,
          }
    );
  };

  const isProtectedUnitsExceeded = state.consumerType === "protected" && state.units > 200;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 3,
            backgroundColor: "#1a1a1a",
            borderRadius: 0,
            borderBottom: "4px solid #000",
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={3}>
              <img src="/ke-logo.png" alt="K-Electric" width={80} height={80} />
              <Box>
                <Typography variant="h3" fontWeight={900} color="white" letterSpacing={-1}>
                  K-ELECTRIC BILLING CALCULATOR
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              startIcon={<Info />}
              onClick={() => setOpenDialog(true)}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: 700,
                px: 3,
                py: 1.5,
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              UNDERSTAND YOUR BILL
            </Button>
          </Stack>
        </Paper>

        {/* Main Form */}
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 0,
            backgroundColor: "white",
            border: "2px solid #000",
          }}
        >
          {/* Consumer Type */}
          <FormControl fullWidth margin="normal">
            <FormLabel
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "#000",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 0.5
              }}
            >
              Consumer Type
            </FormLabel>
            <RadioGroup
              row
              value={state.consumerType}
              onChange={e =>
                handleConsumerTypeChange(e.target.value as ConsumerType)
              }
              sx={{ gap: 3 }}
            >
              <FormControlLabel
                value="normal"
                control={<Radio sx={{ color: "#000", "&.Mui-checked": { color: "#000" } }} />}
                label={
                  <Typography fontWeight={600} fontSize={16}>
                    Normal Consumer
                  </Typography>
                }
                sx={{
                  border: state.consumerType === "normal" ? "2px solid #000" : "2px solid #e0e0e0",
                  px: 3,
                  py: 1.5,
                  borderRadius: 0,
                  backgroundColor: state.consumerType === "normal" ? "#f5f5f5" : "white",
                }}
              />
              <FormControlLabel
                value="protected"
                control={<Radio sx={{ color: "#000", "&.Mui-checked": { color: "#000" } }} />}
                label={
                  <Typography fontWeight={600} fontSize={16}>
                    Protected Consumer
                  </Typography>
                }
                sx={{
                  border: state.consumerType === "protected" ? "2px solid #000" : "2px solid #e0e0e0",
                  px: 3,
                  py: 1.5,
                  borderRadius: 0,
                  backgroundColor: state.consumerType === "protected" ? "#f5f5f5" : "white",
                }}
              />
            </RadioGroup>
          </FormControl>

          {/* Lifeline (Protected only) */}
          <FormControl fullWidth margin="normal" sx={{ mt: 4 }}>
            <FormLabel
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: state.consumerType === "protected" ? "#000" : "#999",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 0.5
              }}
            >
              Lifeline Consumer
            </FormLabel>
            <Select
              value={state.lifeline ? "yes" : "no"}
              disabled={state.consumerType !== "protected"}
              onChange={e =>
                setState(prev => ({
                  ...prev,
                  lifeline: e.target.value === "yes",
                }))
              }
              sx={{
                borderRadius: 0,
                fontWeight: 600,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: 2,
                  borderColor: "#000",
                },
                "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
              }}
            >
              <MenuItem value="yes">YES</MenuItem>
              <MenuItem value="no">NO</MenuItem>
            </Select>
          </FormControl>

          {/* Income Tax Exempt (Normal only) */}
          <FormControl fullWidth margin="normal" sx={{ mt: 4 }}>
            <FormLabel
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: state.consumerType === "normal" ? "#000" : "#999",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 0.5
              }}
            >
              Income Tax Exempted
            </FormLabel>
            <Select
              value={state.incomeTaxExempt ? "yes" : "no"}
              disabled={state.consumerType !== "normal"}
              onChange={e =>
                setState(prev => ({
                  ...prev,
                  incomeTaxExempt: e.target.value === "yes",
                }))
              }
              sx={{
                borderRadius: 0,
                fontWeight: 600,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: 2,
                  borderColor: "#000",
                },
                "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
              }}
            >
              <MenuItem value="yes">YES</MenuItem>
              <MenuItem value="no">NO</MenuItem>
            </Select>
          </FormControl>

          {/* Time of Use (Normal only) */}
          <FormControl fullWidth margin="normal" sx={{ mt: 4 }}>
            <FormLabel
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: state.consumerType === "normal" ? "#000" : "#999",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 0.5
              }}
            >
              Time of Use Consumer
            </FormLabel>
            <Select
              value={state.timeOfUse ? "yes" : "no"}
              disabled={state.consumerType !== "normal"}
              onChange={e =>
                setState(prev => ({
                  ...prev,
                  timeOfUse: e.target.value === "yes",
                }))
              }
              sx={{
                borderRadius: 0,
                fontWeight: 600,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: 2,
                  borderColor: "#000",
                },
                "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
              }}
            >
              <MenuItem value="yes">YES</MenuItem>
              <MenuItem value="no">NO</MenuItem>
            </Select>
          </FormControl>

          {/* Units */}
          <Box mt={5}>
            <FormLabel
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "#000",
                mb: 2,
                display: "block",
                textTransform: "uppercase",
                letterSpacing: 0.5
              }}
            >
              Units Consumed
            </FormLabel>
            <TextField
              fullWidth
              type="number"
              placeholder="Enter units (e.g., 150)"
              slotProps={{
                htmlInput: { min: 0, max: state.consumerType === "protected" ? 200 : undefined }
              }}
              value={state.units}
              error={isProtectedUnitsExceeded}
              helperText={
                isProtectedUnitsExceeded
                  ? "Protected consumers cannot exceed 200 units"
                  : state.consumerType === "protected"
                  ? "Maximum 200 units for protected consumers"
                  : ""
              }
              onChange={e =>
                setState(prev => ({
                  ...prev,
                  units: Number(e.target.value),
                }))
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  fontSize: 20,
                  fontWeight: 600,
                  "& fieldset": {
                    borderWidth: 2,
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderWidth: 2,
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderWidth: 2,
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Box>

          {/* General Tips and Notes */}
          <GeneralTipsAndNotes />

          {/* Calculate Button */}
          <Box mt={5}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              disabled={isProtectedUnitsExceeded || state.units === 0}
              onClick={handleCalculate}
              sx={{
                py: 2,
                fontSize: 18,
                fontWeight: 900,
                borderRadius: 0,
                backgroundColor: "#000",
                color: "#fff",
                letterSpacing: 1,
                "&:hover": {
                  backgroundColor: "#333",
                },
                "&:disabled": {
                  backgroundColor: "#ccc",
                  color: "#666",
                },
              }}
            >
              CALCULATE BILL
            </Button>
          </Box>
        </Paper>

        {/* Bill Breakdown */}
        {bill && <BillBreakdown bill={bill} />}

        {/* Energy Saving Tips */}
        {bill && state.units >= 100 && <EnergySavingTips units={state.units} />}

        {/* Footer */}
        <Box mt={4} textAlign="center" pb={2}>
          <Typography variant="body2" fontWeight={600} color="#000">
            © 2025 K-ELECTRIC BILLING CALCULATOR
          </Typography>
        </Box>
      </Container>

      {/* Understand Your Bill Dialog */}
      <UnderstandBillDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </Box>
  );
}
