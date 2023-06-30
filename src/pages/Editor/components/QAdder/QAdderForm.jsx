import { Paper, TextField, Button, Box } from "@mui/material";

function QAdderForm(props) {
  const { question, onQuestionAdded, onQuestionChange } = props;

  return (
    <Paper sx={{ padding: "1rem" }} elevation={10}>
      <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        <TextField
          variant="outlined"
          label="Type your question here"
          value={question}
          onChange={(e) => {
            onQuestionChange(e.target.value);
          }}
          type="text"
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          onQuestionAdded(question);
          onQuestionChange("");
        }}
      >
        Save
      </Button>
    </Paper>
  );
}

export default QAdderForm;
