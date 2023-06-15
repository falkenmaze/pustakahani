import React from "react";
function Search() {
  return (
    <div className="Search_bar">
      {/* <i class="bi bi-search"></i> */}
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <textarea className="form-control" aria-label="search bar"></textarea>
      </div>
    </div>
  );
}

export default Search;
