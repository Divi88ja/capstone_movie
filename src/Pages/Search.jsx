import React from "react";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div>
      <br />
      <div class="header">
        <div class="form-group">
          <input
            type="search"
            name=""
            id="searchBox"
            placeholder="   Search Movies"
          />
          <div>
            <div className="mybtn">
              <Button variant="outline-dark">Search</Button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Search;
