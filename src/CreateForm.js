import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "onChange":
      return { ...state, [action.payload?.key]: action.payload?.value };
    default:
      return state;
  }
}

const CreateForm = ({ Obj }) => {
  const [state, dispatch] = useReducer(reducer);
  const [con, setCon] = useState(false);
  const [trye, setTrye] = useState("");
  const handleChange = (event) => {
    setTrye(event.target.value);
  };

  function ModalPosition(array) {
    return array?.map((item) => {
      switch (item.componentType) {
        case "TextField":
          return (
            <Grid item {...item}>
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
              />
            </Grid>
          );
        case "Typography":
          return (
            <Grid item {...item}>
              <Typography {...item}>{item.text}</Typography>
            </Grid>
          );
        case "RadioGroup":
          return (
            <Grid item {...item} row>
              <FormControl >
                <FormLabel {...item}>{item.text}</FormLabel>
                <RadioGroup row
                  onChange={(e) =>
                    dispatch({
                      type: "onChange",
                      payload: { key: item.label, value: e.target.value },
                    })
                  }>
                  {item?.options?.map((option) => {
                    return <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  })}
                </RadioGroup>
              </FormControl>
            </Grid>
          );
        case "Select":
          return (
            <Grid item {...item}>
              <FormControl {...item}>
                <InputLabel>{item.label}</InputLabel>
                <Select
                  onChange={(e) =>
                    dispatch({
                      type: "onChange",
                      payload: { key: item.label, value: e.target.value },
                    })
                  }
                  {...item}
                >
                  {item?.reference?.map((item) => (
                    <MenuItem {...item}>{item.text}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          );
        default:
          return (
            <Grid item {...item}>
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
              />
            </Grid>
          );
      }
    });
  }
  return (
    <Box sx={{ mt: 3, mb: 3, ml: 3, mr: 3 }}>
      <Grid container spacing={5}>
        {ModalPosition(Obj)}
      </Grid>
    </Box>
  );
};
export default CreateForm;