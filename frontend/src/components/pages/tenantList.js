import { useNavigate } from "react-router-dom";


const TenantList = () => {

    const navigate = useNavigate();

    const tenantList = [{
        RNumber: '010',
        Name: 'sudhansh',
        PhoneNumber: 94848494999,
        PersonalID: 'pan card',
        PersonalIDNumber: 'BTKPPERESK'
    },{
        RNumber: '020',
        Name: 'sudhansh2',
        PhoneNumber: 94848494999,
        PersonalID: 'pan card',
        PersonalIDNumber: 'BTKPPERESK'
    },{
        RNumber: '030',
        Name: 'sudhansh3',
        PhoneNumber: 94848494999,
        PersonalID: 'pan card',
        PersonalIDNumber: 'BTKPPERESK'
    },{
        RNumber: '040',
        Name: 'sudhansh4',
        PhoneNumber: 94848494999,
        PersonalID: 'pan card',
        PersonalIDNumber: 'BTKPPERESK'
    }];

    const removeTenant = () => {
        alert('remove tenant')
    }

    const editTenant = (tenant) => {
        console.log(tenant)
        alert('edit tenant')
    }

    const moveToAddNew = (tenant) => {
        console.log(tenant)
        alert('moveToAddNew')
    }

    const moveToTenantDetail = () => {
        navigate('/tenant');
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
                                    <tr >
                                        <td>{item.RNumber} </td>
                                        <td className="cursor-pointer text-primary" onClick={() => moveToTenantDetail(item)}>{item.Name}</td>
                                        <td className="d-none d-sm-table-cell ">{item.PhoneNumber}</td>
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
                                <td colspan="6" className="text-center p-2 m-2">
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