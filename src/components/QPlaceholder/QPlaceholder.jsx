import { Paper, Typography, Box, Button, ButtonGroup } from "@mui/material";

function QPlaceholder(props) {
  const { question } = props;

  // The return value will be the "view" of this component.
  return (
    <Paper sx={{ padding: "1rem", marginTop: "1rem" }} elevation={10}>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ flexGrow: 1 }} variant="h4">
          {question}
        </Typography>
        <ButtonGroup variant="contained">
          <Button>+</Button>
          <Button>-</Button>
        </ButtonGroup>
      </Box>
    </Paper>
  );
}

export default QPlaceholder;
