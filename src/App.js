import logo from "./logo.svg";
import "./App.css";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";

const AppContainer = styled.div`
  margin: 50px;
  .extra-padding {
    padding-bottom: 30px;
  }
`;
const QuestionContainer = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  border: 1px solid #d3d3d3;
`;
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function App() {
  return (
    <AppContainer className="App">
      <FormControl>
        <QuestionContainer>
          <h2>Please select option 1</h2>
          <RadioGroup>
            <FormControlLabel
              value="Option 1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="Option 2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="Option 3"
              control={<Radio />}
              label="Option 3"
            />
            <FormControlLabel
              value="Option 4"
              control={<Radio />}
              label="Option 4"
            />
          </RadioGroup>
        </QuestionContainer>
        <QuestionContainer>
          <FormGroup>
            <h2>Please select option 1 and option 2</h2>
            <FormControlLabel
              value="Option 1"
              control={<Checkbox />}
              label="Option 1"
            />
            <FormControlLabel
              value="Option 2"
              control={<Checkbox />}
              label="Option 2"
            />
            <FormControlLabel
              value="Option 3"
              control={<Checkbox />}
              label="Option 3"
            />
            <FormControlLabel
              value="Option 4"
              control={<Checkbox />}
              label="Option 4"
            />
          </FormGroup>
        </QuestionContainer>
        <QuestionContainer>
          <h2 className="extra-padding">Please select 2</h2>
          <Slider
            defaultValue={0}
            marks={marks}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            min={0}
            max={5}
            valueLabelDisplay="on"
          />
        </QuestionContainer>
        <QuestionContainer>
          <h2>Please write one word</h2>
          <TextField></TextField>
        </QuestionContainer>
        <QuestionContainer>
          <h2>Please select #4</h2>
          <Select labelId="label" id="select" value="10">
            <MenuItem value="10">#1</MenuItem>
            <MenuItem value="20">#2</MenuItem>
            <MenuItem value="30">#3</MenuItem>
            <MenuItem value="40">#4</MenuItem>
          </Select>
        </QuestionContainer>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </AppContainer>
  );
}

export default App;
