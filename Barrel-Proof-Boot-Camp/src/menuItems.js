export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Progress",
    url: "/progress",
  },
  {
    title: "Get Help",
    url: "/getHelp",
  },
  {
    title: "Account",
    // url: "/account",
    submenu: [
      { title: "Not Your Account? Login", url: "/login" },
      { title: "Log Out", url: "/logout" },
      { title: "Profile", url: "/profile" },
    ],
  },
];

//   submenu: [
//     {
//       title: "web design",
//       url: "web-design",
//     },
//     {
//       title: "web development",
//       url: "web-dev",
//       submenu: [
//         {
//           title: "Frontend",
//           url: "frontend",
//         },
//         {
//           title: "Backend",
//           submenu: [
//             {
//               title: "NodeJS",
//               url: "node",
//             },
//             {
//               title: "PHP",
//               url: "php",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "SEO",
//       url: "seo",
//     },
//   ],
