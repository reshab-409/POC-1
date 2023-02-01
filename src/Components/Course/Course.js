// import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// function Info(props) {
//     return (
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <Accordion
//                 sx={{
//                     width: "77.5vw",
//                     backgroundColor: "#fff",
//                     height: "80%",
//                     padding: "20px",
//                     justifyContent: "center"
//                 }} >
//                 <AccordionSummary
//                     // expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
// <Box sx={{
//     minHeight: "23vh",
//     display: "flex",
//     justifyContent: "center"
// }}>
//     <Card sx={{
//         height: "22vh",
//         width: "78vw",
//         backgroundColor: "#fff",
//         position: "relative",
//         boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
//     }}>
//         <Box sx={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//         }}>

//             <Box sx={{
//                 width: "30%",
//                 backgroundColor: "#fff",
//                 height: "100%",
//                 overflow: "hidden"
//             }}>
//                 <img style={{
//                     boxSizing: "border-box",
//                     objectFit: "cover",
//                     height: "100%",
//                     width: "100%"
//                 }} src={props.imgurl} alt="pic here" />
//             </Box>
//             {/* product heading details */}
//         </Box>
//     </Card>
// </Box>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         <Typography> {props.name} </Typography>

//                         <Typography> {props.rollNo}</Typography>
//                         {props.details}
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         </Box>
//     );
// };
// export default Info;





import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "../store/Cart-slice";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
// import { ShowCart1 } from '../store/addToCart-slice';

// import "./Product.css";
import { Card, Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Course = ({ name, id, imgURL, price }) => {
  //   const a = useSelector(ShowCart1);

  //   var value2 = a;
  //   console.log(JSON.parse(value2) === true);

  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  //   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  //   const dispatch = useDispatch();
  const [Warn, setWarn] = useState();
  const [state] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;


  const handleClose = () => {
    setWarn(false);
  };

  // const addToCart = () => {
  // if (!isLoggedIn === false) {
  // setWarn(false);
  // dispatch(
  //   cartActions.addToCart({
  //     name,
  //     id,
  //     price

  //   }))
  // } else {
  //   setWarn(true);
  // };
  // }
  return (
    <>
      <Box sx={{
        minHeight: "25vh",
        display: "flex",
        justifyContent: "center"
      }}>
        <Card sx={{
          height: "24vh",
          width: "80vw",
          backgroundColor: "#fff",
          position: "relative",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
        }}>
          <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}>

            <Box sx={{
              width: "50%",
              backgroundColor: "#fff",
              height: "100%",
              overflow: "hidden"
            }}>
              <img style={{
                boxSizing: "border-box",
                objectFit: "cover",
                height: "100%",
                width: "100%"
              }} src={imgURL} alt="pic here" />
            </Box>
            <Box sx={{
              width: "70%",
              backgroundColor: "#eee",
              height: "100%",
              padding: "20px"
            }}>
              {/* product heading details */}
              <Typography variant="h5">{name}</Typography>
              <Typography>$ {price}</Typography>
              <Button variant="contained" >Add to cart</Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Course;





