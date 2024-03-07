import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard(contact) {

  return (
    <Card 
    key = {contact.id}
    data={contact}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>  
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
