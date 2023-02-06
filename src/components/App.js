import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function Card(notes) {
  return <Note Key={notes.key} title={notes.title} content={notes.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(Card)}
      <Footer />
    </div>
  );
}

export default App;
