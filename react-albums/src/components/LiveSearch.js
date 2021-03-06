import React, { Fragment, useState, useEffect, useRef } from "react";

import SearchBar from "components/SearchBar";
import Results from "components/Results";
import axios from "axios";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const testURL = 'https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm';
    axios.get(testURL).then(response => {
      console.log(response.data.results);
    });
  }, [term])

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
