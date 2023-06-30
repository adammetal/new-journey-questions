import {
  Paper,
  List,
  ListItem,
  Button,
  ButtonGroup,
  ListItemText,
} from "@mui/material";

function QListItem({ question }) {
  return (
    <li>
      {question}{" "}
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
}

function QList(props) {
  // array of strings
  const { questions } = props;

  return (
    <Paper elevation={10}>
      <List>
        {questions.map((question, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <ButtonGroup variant="contained">
                <Button>+</Button>
                <Button>-</Button>
              </ButtonGroup>
            }
          >
            <ListItemText primary={question} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default QList;
