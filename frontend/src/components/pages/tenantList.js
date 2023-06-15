import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";
import { environment } from "../../environment";


const TenantList = () => {
    const [tenantList, setTenantList] = useState([]);
    const authContextValue = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
            try {
                const requestBody = {
                    query: `
                    query{
                        tenantsByUser(userId:"${authContextValue.userId}"){
                            _id
                            College
                            Course
                            FatherName
                            FatherPhoneNumber
                            phoneNumber
                            PermanentAddress
                            PersonalID
                            PersonalIDNumber
                            RentPaidTill
                            RoomNumber
                            StayFrom
                            email
                            name
                        }
                      }
                  `
                };
                const request = await fetch(environment.GRAPHQL_URL, {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const response = await request.json();
                setTenantList(response.data.tenantsByUser)
            } catch (err) {
                console.log(err)
            }
        }
        getUser();
    }, [authContextValue.userId])

    const removeTenant = async (tenant) => {
        try {
            const requestBody = {
                query: `
                mutation{
                    removeTenant(tenantId:"${tenant._id}",email:"${tenant.email}"){
                      _id
                    }
                  }`
            };
            const request = await fetch(environment.GRAPHQL_URL, {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
             await request.json();
           } catch (err) {
            console.log(err)
        }
    }

    const editTenant = (tenant) => {
        console.log(tenant)
        navigate('/tenant', { state: tenant });
    }

    const moveToAddNew = () => {
        navigate('/tenant', { state: {} });
    }

    return (
        <>
            <div className="container my-2">
                <div className="">
                    <button className="btn btn-success" onClick={moveToAddNew}> Add New</button>
                </div>
                <div className="row my-3 d-flex">
                    <table className=" table table-bordered table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Room Number</th>
                                <th scope="col">Name</th>
                                <th scope="col" className="d-none d-sm-table-cell ">Phone Number</th>
                                <th scope="col" className="d-none d-sm-table-cell ">Personal ID</th>
                                <th scope="col" className="d-none d-sm-table-cell ">Personal ID Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {tenantList.length > 0 ? <>
                            <tbody>
                                {tenantList.map(item => (
                                    <tr key={item.id} >
                                        <td>{item.RoomNumber} </td>
                                        <td className="cursor-pointer text-primary">{item.name}</td>
                                        <td className="d-none d-sm-table-cell ">{item.phoneNumber}</td>
                                        <td className="d-none d-sm-table-cell ">{item.PersonalID}</td>
                                        <td className="d-none d-sm-table-cell ">{item.PersonalIDNumber}</td>
                                        <td>
                                            <button onClick={() => removeTenant(item)} className="btn btn-danger m-1">Remove</button>
                                            <button onClick={() => editTenant(item)} className="btn btn-primary m-1">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </> : <>
                            <tbody>
                                <td colSpan="6" className="text-center p-2 m-2">
                                    No data
                                </td>
                            </tbody>
                        </>}
                    </table>
                </div>
            </div>
        </>
    )
};

export default TenantList;