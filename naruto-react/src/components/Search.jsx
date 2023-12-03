import React, { useState, useEffect } from "react";

function Search() {
  const [isActivated, setIsActivated] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const filterData = () => {
      const filter = searchValue.toUpperCase();
      const cont = containerRef.current.getElementsByClassName("card");
      const filteredItems = Array.from(cont).filter((item) => {
        const h = item.getElementsByTagName("h2")[0];
        const textValue = h.textContent.toUpperCase();
        return textValue.includes(filter);
      });
      setFilteredData(filteredItems);
    };

    filterData();
  }, [searchValue]);

  return (
    <div className={`search ${isActivated ? "activated" : ""}`}>
      <div>
        <div
          className="icon"
          onClick={() => setIsActivated(!isActivated)}
        ></div>
        <div className="input">
          <input
            type="text"
            placeholder="search"
            id="mysearch"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <span className="clear" onClick={() => setSearchValue("")}></span>
      </div>
      <div id="cont" ref={containerRef}>
        {filteredData.map((item, index) => (
          <div className="card" key={index}>
            <h2>Title</h2>
            <p>Content</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
