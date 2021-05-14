import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  
  function handleChange(event)
  { var p =event.target.value
    if(event.target.name==="fName")
    {
      setContact({fName: p,
      lName: contact.lName,
      email: contact.email

      })
    }
    else if (event.target.name==="lName"){
      setContact({fName: contact.fName,
        lName: p,
        email: contact.email
  
        })
    }
  
  else {
    setContact({fName: contact.fName,
      lName: contact.lName,
      email: p

      })

  }
}

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange}  />
        <input name="email" placeholder="Email"  onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
