import React from "react";
import "./book.css";
function Book() {
  return (
    <div className="_book_">
      {/* image of the book */}
      <img
        src="https://c4.wallpaperflare.com/wallpaper/508/555/786/lofi-cafe-asian-digital-art-artwork-hd-wallpaper-preview.jpg"
        width="300"
        height="200"
      />
      {/* description of the book */}
      <h2 className="features">this book is used for reading</h2>
      {/* location of the book  */}
      <h2 className="features">Address</h2>
      {/* owner */}
      <h2 className="features">Owner name</h2>
      <ul>
        <li>Phone no</li>
        <li>Email</li>
        <li>Alt phone no</li>
      </ul>
    </div>
  );
}

export default Book;
