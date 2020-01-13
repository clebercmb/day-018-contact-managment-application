import React from "react"
import { Link } from "react-router-dom"

function AddContact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Add a new contact</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">
                                Full Name
                            </label>
                            <input type="text" name="fullName"  id="fullName" className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" name="phone" id="phone" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" name="address" id="address" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="avatar" className="form-label">Photo</label>
                            <input type="file" name="avatar" id="avatar" className="form-control" />
                            <img src={"/img/photo_cleber_miranda.jpg"} alt="avatar" width="150" height="200" />
                        </div>
                        <button className="btn btn-primary btn-block">Save</button>

                        <Link to="/">
				        <a className="" href="#" role="button">
                            go get back to contacts
				        </a>
			        </Link>
                    </form>


                </div>
                
         
            </div>
        </div>


    )
}

export default AddContact

////div.form-group>lable.form-label+input:email#email.form-control 