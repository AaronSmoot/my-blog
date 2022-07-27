import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'NIKE EYBL',
  description:
    "EYBL is the Nike Elite Youth Basketball Leauge which gathers great players from around the country to compete.",
  image: 'https://th.bing.com/th/id/OIP.DP2U-oleotJAORaSPah-DgHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
    imageText: 'main image description',
  linker: [
    { title: "continue reading...", url: 'https://nikeeyb.com/'}
  ]
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'Check out the best high school basketball teams!',
    image: 'https://th.bing.com/th/id/OIP.KkqSsMZlf_ogxD2Ed5avpwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    imageLabel: 'Image Text',
  },
  {
    title: 'OTE',
    description:
      'Check Out OTE (Overtime Elite) A new facility and oppurtunity for High School players to make 6 figures while still getting looked at by scouts',

    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'Top Ranked Recruits In The US',
  Rankings: [
    { title: '1. DJ Wagner', url: 'http://www.espn.com/college-sports/basketball/recruiting/player/_/id/241461/dj-wagner' },
    { title: '2. Dariq Whitehead', url: 'https://247sports.com/Player/Dariq-Whitehead-46057670/' },
    { title: '3. Nick Smith', url: 'https://247sports.com/Player/Nick-Smith-46086035/' },
    { title: '4. Kyle Filipowski', url: 'https://247sports.com/Player/Kyle-Filipowski-46101556/' },
    { title: '5. Dillion Mitchell', url: 'https://247sports.com/Player/Dillon-Mitchell-46097730/' },
    { title: '6. GG Jackson', url: 'https://247sports.com/Player/GG-Jackson-46103379/' },
    { title: '7. Keyonte George', url: 'https://247sports.com/Player/Keyonte-George-46059226' },
    { title: '8. Cason Wallace', url: 'https://247sports.com/Player/Cason-Wallace-46099453' },
    { title: '9. Amari Bailey', url: 'https://247sports.com/Player/Amari-Bailey-46078935' },
    { title: '10. Kelel Ware', url: 'https://247sports.com/Player/Kelel-Ware-46100150' },
    { title: '11. Jarace Walker', url: 'https://247sports.com/Player/Jarace-Walker-46059530' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="HighSchool Ball" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost}
         // title={linker}
          ></MainFeaturedPost>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.Rankings}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}