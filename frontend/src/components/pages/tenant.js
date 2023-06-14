import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../context/auth-context";


const Tenant = () => {
    const authContextValue = useContext(AuthContext);
    const [tenant, setTenent] = useState(
        {
            name: '',
            email: '',
            phoneNumber: '',
            College: '',
            Course: '',
            FatherName: '',
            FatherPhoneNumber: '',
            PermanentAddress: '',
            PersonalID: '',
            PersonalIDNumber: '',
            RentPaidTill: '',
            RoomNumber: '',
            StayFrom: '',
            user: authContextValue.userId
        }
    )
    const location = useLocation();
    const state = location?.state;
    const isEditMode = Object.keys(state).length > 0;

    useEffect(() => {
        if (isEditMode) {
            setTenent(state)
        }
    }, []);

    const onSubmitClick = (event) => {
        event.preventDefault();

        let requestBody = {};

        if (isEditMode) {
            requestBody = {
                query: `
              mutation{
                  updateTenant(tenantInput:
                      {
                      tenantId:"${tenant._id}",
                          name: "${tenant.name}", 
                          email:"${tenant.email}"
                          College:"${tenant.College}",
                                Course:"${tenant.Course}",
                                FatherName:"${tenant.FatherName}",
                                FatherPhoneNumber:${tenant.FatherPhoneNumber},
                                PermanentAddress:"${tenant.PermanentAddress}",
                                PersonalID:"${tenant.PersonalID}",
                                PersonalIDNumber:"${tenant.PersonalIDNumber}",
                                RentPaidTill:"${tenant.RentPaidTill}",
                                RoomNumber:${tenant.RoomNumber},
                                StayFrom:"${tenant.StayFrom}",
                                user:"${authContextValue.userId}",
                          phoneNumber: ${tenant.phoneNumber}}){
                    _id
                  }
                }
              `}
        } else {
            requestBody = {
                query: `
                mutation{
                    createTenants(tenantInput:
                        {
                            name: "${tenant.name}", 
                            email:"${tenant.email}"
                            College:"${tenant.College}",
                                  Course:"${tenant.Course}",
                                  FatherName:"${tenant.FatherName}",
                                  FatherPhoneNumber:${tenant.FatherPhoneNumber},
                                  PermanentAddress:"${tenant.PermanentAddress}",
                                  PersonalID:"${tenant.PersonalID}",
                                  PersonalIDNumber:"${tenant.PersonalIDNumber}",
                                  RentPaidTill:"${tenant.RentPaidTill}",
                                  RoomNumber:${tenant.RoomNumber},
                                  StayFrom:"${tenant.StayFrom}",
                                  user:"${authContextValue.userId}",
                            phoneNumber: ${tenant.phoneNumber}}){
                      _id
                    }
                  }
                `
            }
        }

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!')
                }
                return res.json();
            })
            .then(response => {
                authContextValue.login(response.data.login.token, response.data.login.userId, response.data.login.tokenExpiration)
            }).catch(err => {
                console.log(err)
            });
    }

    const handleFormChanges = (event) => {
        setTenent({
            ...tenant,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <h4>Tenant </h4>
                </div>

                <form onSubmit={onSubmitClick}>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Name
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="name" value={tenant.name} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Email
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="email" value={tenant.email} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Room Number
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="RoomNumber" value={tenant.RoomNumber} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Phone Number
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="phoneNumber" value={tenant.phoneNumber} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Father Name
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="FatherName" value={tenant.FatherName} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Father Phone Number
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="FatherPhoneNumber" value={tenant.FatherPhoneNumber} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            College
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="College" value={tenant.College} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Course
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="Course" value={tenant.Course} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PersonalID
                        </div>
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <input type="radio" name="PersonalID" checked={tenant.PersonalID === "PanCard"} onChange={handleFormChanges} className="form-check-input" id="pan-card" value="PanCard" />
                                <label className="form-check-label" htmlFor="pan-card">Pan Card</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="PersonalID" id="aadhar" checked={tenant.PersonalID === "AddharCard"} onChange={handleFormChanges} className="form-check-input"
                                    value="AddharCard" />
                                <label className="form-check-label" htmlFor="aadhar">Adhar Card</label>
                            </div>
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PersonalIDNumber
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="PersonalIDNumber" value={tenant.PersonalIDNumber} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            StayFrom
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="StayFrom" value={tenant.StayFrom} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            RentTill
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="RentPaidTill" value={tenant.RentPaidTill} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PermanentAddress
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" name="PermanentAddress" value={tenant.PermanentAddress} onChange={handleFormChanges} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <button className="btn btn-primary" type="submit"> Submit </button>
                    </div>
                </form >

            </div >
        </>
    )
}

export default Tenant;