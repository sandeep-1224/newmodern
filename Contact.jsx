import React from "react";
const Contact = () => {
    return(
        <>
        <div className="py-2">

      <h1 className="text-center">Contact us</h1>
    
  </div>
    <div className="container">
        <div className="row my-5">
            <div className="col-md-6 col-10 mx-auto">

            <form action="/action_page.php">
  <div className="form-group">
    <label for="email">Name:</label>
    <input type="text" className="form-control" placeholder="Enter name" id="email"/>
  </div>
  <div className="form-group">
    <label for="pwd">Mobile no.:</label>
    <input type="text" className="form-control" placeholder="Enter Mobile no." id="pwd"/>
  </div>


  <div className="form-group">
    <label for="pwd">Email:</label>
    <input type="email" className="form-control" placeholder="Enter Email address" id="pwd"/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div className="form-group">
    <label for="pwd">Message:</label>
    <textarea className="form-control"></textarea>
  </div>
  
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"/> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
</div>
</div>
</div>

        </>
    );
};
export default Contact;