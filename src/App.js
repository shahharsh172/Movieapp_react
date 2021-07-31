import "./styles.css";
import React, { useState } from "react";
import content from "./content.json";

// onChange is an eventListener provided to listen input value
// so don't change it by asuming it as just an varaible name.
// const SearchBar = ({ value, onChange }) => {
//   return (
//     <input
//       placeholder="Search"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//     />
//   );
// };
// Alternative way to perform similar functionality

function SearchBar({ value, onCh }) {
  function val(e) {
    return onCh(e.target.value);
  }
  return <input placeholder="Search" value={value} onChange={val} />;
}
// here

// here we can write value ={value.propName}
// to display whichever property we want to display on onClick event.

function DisplayMovie({ value }) {
  return (
    <div className="d">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w300/${value.poster_path}`}
          width="200"
          height="250"
        />
      </div>

      <div>
        <div className="b2">{value.original_title}</div>
        <div className="text-contain ">{value.overview}</div>
        <div>Langauage: {value.original_language}</div>
        <div>Release-Date: {value.release_date}</div>
        <div>IMDB: {value.vote_average}</div>
      </div>
    </div>
  );
}
// check out for how to turnary conditions in js.
// responsible for iterating over arrayList and updating state on click events.
// pass refernce in react component than on onClick event assign function call
// which is declared and assigned in App.
const MovieList = ({ movie, setCurrentMovie, currentMovie }) => {
  function displayHandler(t) {
    return (
      <button
        className={currentMovie.id === t.id ? "content-color" : ""}
        onClick={(rg1) => {
          //console.log(rg1);
          setCurrentMovie(t);
        }}
      >
        <div className="App btn-1">{t.original_title} </div>
      </button>
    );
  }

  return <div className="dc btn">{movie.map((t) => displayHandler(t))}</div>;
};
//const buttonClick = (t) => t.overview;

//console.log(buttonClick());

export default function App() {
  const [movie, setMovie] = useState(content.results);
  const [filterStr, setFilterStr] = useState("");
  const [currentMovie, setCurrentMovie] = useState(movie[0]);
  //const filterByText = (t) => t.original_title;
  const filterValue = (t) => {
    return t.original_title.toLocaleLowerCase().indexOf(filterStr) >= 0;
  };
  //console.log(currentMovie);
  // Map your React Components in app.
  return (
    <div className="d">
      <div>
        <h3>Movie App</h3>
        <SearchBar value={filterStr} onCh={setFilterStr} />
        <div className="d">
          <div>
            <MovieList
              movie={movie.filter(filterValue)}
              setCurrentMovie={setCurrentMovie}
              currentMovie={currentMovie}
            />
          </div>
          <div>
            <DisplayMovie value={currentMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}
