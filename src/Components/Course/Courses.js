// const Courses = [
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",
//         name: "Deepak",
//         rollNo: "123"
//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
//         name: "Yash",
//         rollNo: "124"
//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg",
//         name: "Raj",
//         rollNo: "125"
//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
//         name: "Rohan",
//         rollNo: "126"
//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://s40424.pcdn.co/in/wp-content/uploads/2022/07/digital-marketing-courses.jpg",
//         name: "Puneet",
//         rollNo: "127"

//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
//         name: "Vivek",
//         rollNo: "128"
//     },
//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
//         name: "Aman",
//         rollNo: "129"
//     },

//     {
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget.",
//         imgurl: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
//         name: "reshab",
//         rollNo: "130"
//     },
// ];
// export default Courses;






import { Box, Card, List, ListItem } from "@mui/material";
import React from "react";
import Course from "./Course";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
    price: 1199,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://cdn1.smartprix.com/rx-iU6WN3sSg-w1200-h1200/U6WN3sSg.jpg",
    price: 284,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/13-3320/media-gallery/peripherals_laptop_latitude_3320_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=574&qlt=100,1&resMode=sharp2&size=574,402&chrss=full",
    price: 749,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://m.media-amazon.com/images/I/61LzPiqjg-L._SL1500_.jpg",
    price: 479,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://m.media-amazon.com/images/I/71pY7LZLnKS._SX450_.jpg",
    price: 643,
  },
  {
    id: 6,
    name: "ASUS Vivobook 14",
    imgURL:
      "https://d39d98bvxoocym.cloudfront.net/media/catalog/product/b/6/b661873c6_178266_b_mtvt9dx8dgtnhqev.jpg?width=800&height=800&store=en_IN&image-type=image",
    price: 533,
  },
  {
    id: 7,
    name: "MSI GF63",
    imgURL:
      "https://m.media-amazon.com/images/I/719sMfG+11L._SL1500_.jpg",
    price: 648,
  },
  {
    id: 8,
    name: "HP Elitebook 1030",
    imgURL:
      "https://5.imimg.com/data5/PD/FY/MY-2890680/hp-elitebook-x360-1030-g2-1ux16pa-500x500.png",
    price: 360,
  },
  {
    id: 9,
    name: "Asus Zenbook 14x",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRE9MTOnrF58KKvi0vfK7y1pn5KY_TB4MuNDYv1HkYmQbufScONRLJRXTVcKm-_mmWOfyfceVtARXGZjMGDpYBjljoBfVbLV-wCZVx6lkHZn_-sttxOMvZ9Pg&usqp=CAE",
    price: 1299,
  },
  {
    id: 10,
    name: "Microsoft Surface",
    imgURL:
      "https://m.media-amazon.com/images/I/61OvV27-44L._SL1500_.jpg",
    price: 538,
  },
];
const Courses = () => {
  return (
    <Box  sx={{ width:"100%",display: "flex",justifyContent: "center",}}>
      <List sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {DUMMY_PRODUCTS.map((course, index) => (
          <ListItem key={index}>
            <Course
              id={course.id}
              name={course.name}
              imgURL={course.imgURL}
              price={course.price}
            />
          </ListItem>
        ))}
      </List>
      </Box>
  );
};

export default Courses;
