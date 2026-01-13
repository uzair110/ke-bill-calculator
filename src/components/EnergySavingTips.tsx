import {
  Paper,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  TipsAndUpdates,
  Kitchen,
  AcUnit,
  Lightbulb,
} from "@mui/icons-material";

interface Props {
  units: number;
  consumerType: "normal" | "protected";
}

export default function EnergySavingTips({ units, consumerType }: Props) {
  return (
    <Paper
      elevation={4}
      sx={{
        mt: 3,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Alert
        severity="info"
        icon={<TipsAndUpdates fontSize="large" />}
        sx={{
          "& .MuiAlert-message": { width: "100%" },
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          "& .MuiAlert-icon": { color: "#f59e0b" },
        }}
      >
        <AlertTitle sx={{ fontWeight: 700, fontSize: 18, color: "#92400e" }}>
          Electricity Saving Tips based on your consumption
        </AlertTitle>
        <List dense>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Kitchen sx={{ color: "#059669" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ color: "#1f2937" }}>
                  Turning the refrigerator OFF for 6 hours daily reduces monthly consumption by{" "}
                  <strong>{Math.round((18 / units) * 100)}%</strong> (18 units out of{" "}
                  {Math.round(units)} units for a medium sized refrigerator)
                </Typography>
              }
            />
          </ListItem>
          {consumerType === "normal" && <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <AcUnit sx={{ color: "#0ea5e9" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ color: "#1f2937" }}>
                  Turning your AC off for 2 additional hours daily reduces monthly consumption by{" "}
                  <strong>{Math.round((60 / units) * 100)}%</strong> (60 units out of{" "}
                  {Math.round(units)} units for a 1.5 Ton Inverter AC)
                </Typography>
              }
            />
          </ListItem>}
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Lightbulb sx={{ color: "#eab308" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ color: "#1f2937" }}>
                  Replacing Conventional Bulbs with LEDs can reduce electricity consumption by {" "}
                  <strong>{Math.round((40 / units) * 100)}% </strong>
                  (around 40 units out of {Math.round(units)} for normal householding lights)
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Alert>
    </Paper>
  );
}

