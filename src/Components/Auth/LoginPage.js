import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import FormStyle from "../Utils/FormStyle";
// import MyButton from "../Utils/MyButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MyCard from "../Utils/MyCard";
// import { useDispatch } from "react-redux";
import MyIconButton from "../Utils/MyIconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FormStyle from "../Utils/FormStyle";
import { Link } from "react-router-dom";
// import { RegisterAppointmentAllTypeRequest } from "../../Redux/Data/DataService";
// import { DatePicker } from "@mui/x-date-pickers";
// import MyDatePicker from "../Utils/MyDatePicker";
// import { getBackendFormatDate } from "../../Functions/DateTimeFunction";

const ValidateLength = (e) => {
  if (e < 10) return `0${e}`;
  return e;
};

const initialData = () => {
  let temp = [];
  for (let i = 0; i < 24; i++) {
    temp.push({
      id: i,
      role: `${ValidateLength(i)}:00 - ${ValidateLength(i + 1)}:00`,
      value: `${ValidateLength(i)}:00`,
    });
  }
  return temp;
};

export default function EditSlot({
  setOpen,
  data,
  setCheck,
  HandelDelete,
  mode,
}) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({});
  const [blur, setBlur] = useState({ seat: false, slot: false });
  const [error, setError] = useState({
    seat: "Field can't be empty",
    slot: "Please Select one",
  });
  const [slot, setSlot] = useState(initialData);
  const [slotView, setSlotView] = useState("");
  const [open1, setOpen1] = useState(false);
  const [filterDate, setFilterDate] = useState(new Date());
  const [load, setLoad] = useState(false);
  const [data1, setData1] = useState([]);

  const [type, setType] = useState(false);
  //   const dispatch = useDispatch();

  // useEffect(() => {
  //   if (mode) {
  //   } else {
  //     setValue(data.data);
  //     validateValue(data.data, slotView);
  //     let temp = [...slot];
  //     let b = new Date(data.data.date);
  //     b.setTime(b.getTime() + b.getTimezoneOffset() * 60 * 1000);
  //     let cv = temp.find((p) => {
  //       if (p.value === `${ValidateLength(b.getHours())}:00`) return true;
  //       return false;
  //     });
  //     setSlotView(cv);
  //     data.all.forEach((v) => {
  //       let old = new Date(v.date);
  //       old.setTime(old.getTime() + old.getTimezoneOffset() * 60 * 1000);
  //       let newD = `${ValidateLength(old.getHours())}:00`;
  //       temp = temp.filter((i) => {
  //         if (i.value === newD && v.date !== data.data.date) {
  //           return false;
  //         }
  //         return true;
  //       });
  //     });
  //     setSlot(temp);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (mode) {
  //     setLoad(true);
  //     const obj = {
  //       data: {
  //         method: "GET",
  //         endPoint: `?date=${getBackendFormatDate(filterDate)}`,
  //       },
  //       onSuccess: (res) => {
  //         setData1(res);
  //         setLoad(false);
  //       },
  //       onFailed: (res) => {
  //         setLoad(false);
  //         setData1([]);
  //       },
  //     };
  //     const promise = dispatch(RegisterAppointmentAllTypeRequest(obj));
  //     return () => {
  //       promise.abort();
  //     };
  //   }
  // }, [filterDate]);

  // useEffect(() => {
  //   if (mode) {
  //     if (data1.length) {
  //       let temp = [...initialData()];
  //       data1.forEach((v) => {
  //         let old = new Date(v.date);
  //         old.setTime(old.getTime() + old.getTimezoneOffset() * 60 * 1000);
  //         let newD = `${ValidateLength(old.getHours())}:00`;
  //         temp = temp.filter((i) => {
  //           if (i.value === newD) {
  //             return false;
  //           }
  //           return true;
  //         });
  //       });
  //       setSlot(temp);
  //     } else {
  //       setSlot(initialData);
  //     }
  //   }
  // }, [data1]);

  // const handelChange = (e) => {
  //   let temp = { ...value };
  //   temp[e.target.name] = e.target.value;
  //   setValue(temp);
  //   validateValue(temp, slotView);
  // };

  // const handelBlur = (e) => {
  //   const temp = { ...blur };
  //   temp[e.target.name] = true;
  //   setBlur(temp);
  // };

  // const validateValue = (val, view) => {
  //   const temp = { ...error };
  //   if (val.seat === "") {
  //     temp.seat = "Field can't be empty";
  //   } else if (isNaN(val.seat)) {
  //     temp.seat = "Field value must be a number";
  //   } else if (val.seat <= 0) {
  //     temp.seat = "Field value must be greater than 0";
  //   } else if (val.seat < value.booked_seat) {
  //     temp.seat = "Value can't be less than booked seat";
  //   } else {
  //     temp.seat = "";
  //   }
  //   if (view === "") {
  //     temp.slot = "Please Select one";
  //   } else {
  //     temp.slot = "";
  //   }
  //   setError(temp);
  // };

  // const HandelSubmit = (e) => {
  //   e.preventDefault();
  //   if (error.slot === "" && error.seat === "") {
  //     setLoading(true);
  //     if (mode) {
  //       let temp = {
  //         seat: value.seat,
  //         category: "",
  //         date: "",
  //       };
  //       let myType = getBackendFormatDate(filterDate);
  //       temp.date = `${myType}T${slotView.value}:00.000Z`;
  //       if (slotView.id < 12) {
  //         temp.category = "Morning";
  //       } else if (slotView.id < 17) {
  //         temp.category = "AfterNoon";
  //       } else {
  //         temp.category = "Evening";
  //       }
  //       const obj = {
  //         data: { method: "POST", endPoint: "", data: temp },
  //         onSuccess: (res) => {
  //           setOpen(false);
  //           setCheck((prev) => prev + 1);
  //         },
  //         onFailed: (res) => {
  //           setLoading(false);
  //         },
  //       };
  //       dispatch(RegisterAppointmentAllTypeRequest(obj));
  //     } else {
  //       let temp = {
  //         seat: value.seat,
  //         category: value.category,
  //         date: value.date,
  //       };
  //       let myType = value.date.split("T")[0];
  //       temp.date = `${myType}T${slotView.value}:00.000Z`;
  //       if (slotView.id < 12) {
  //         temp.category = "Morning";
  //       } else if (slotView.id < 17) {
  //         temp.category = "AfterNoon";
  //       } else {
  //         temp.category = "Evening";
  //       }
  //       const obj = {
  //         data: { method: "PATCH", endPoint: `/${data.data.id}`, data: temp },
  //         onSuccess: (res) => {
  //           setOpen(false);
  //           setCheck((prev) => prev + 1);
  //         },
  //         onFailed: (res) => {
  //           setLoading(false);
  //         },
  //       };
  //       dispatch(RegisterAppointmentAllTypeRequest(obj));
  //     }
  //   }
  // };

  return (
    <MyCard component="form" onSubmit={""} sx={{ width: "500px" }}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={() => ""} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </MyCard>
  );
}
