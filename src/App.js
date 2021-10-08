import {Route} from 'react-router-dom';

// Axios
import axios from 'axios';

// HOC 
import DefaultHOC from './hoc/Default.Hoc';
import MovieHOC from './hoc/Movie.HOC';

// Pages
import HomePage from './pages/Home.Page';
import Movie from './pages/Movie.Page';
import Plays from './pages/plays.pages';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



// Empty tags are known as fragments. <>
function App() {
  return (
    <> 
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie}/>
      <DefaultHOC path="/Plays" exact component={Plays} />
    </>
  );
}
//  /(Home route), /movie(movie route)
export default App;



// SPREAD OPERATOR
// const harsh = {
//   name: "Harsh",
//   dob: 2002
// };

// const student = {...harsh, goodStudent: true};

// console.log(student);
