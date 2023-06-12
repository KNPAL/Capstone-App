

const TenantList = () => {

    const tenantList = [];

    const removeTenant = () => {
        alert('remove tenant')
    }

    const editTenant = () => {
        alert('edit tenant')
    }

    const moveToAddNew = () => {
        alert('moveToAddNew')
    }

    const moveToTenantDetail = () => {
        alert('moveToTenantDetail')
    }

    return (
        <>
            <div class="container my-2">
                <div class="">
                    <button class="btn btn-success" onClick={moveToAddNew}> Add New</button>
                </div>
                <div class="row my-3 d-flex">
                    <table class=" table table-bordered table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Room Number</th>
                                <th scope="col">Name</th>
                                <th scope="col" class="d-none d-sm-table-cell ">Phone Number</th>
                                <th scope="col" class="d-none d-sm-table-cell ">Personal ID</th>
                                <th scope="col" class="d-none d-sm-table-cell ">Personal ID Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {tenantList.length > 0 ? <>
                            <tbody>
                                {tenantList.map(item => (
                                    <tr >
                                        <td>{item.RNumber} </td>
                                        <td class="cursor-pointer text-primary" onClick={moveToTenantDetail(item)}>{item.Name}</td>
                                        <td class="d-none d-sm-table-cell ">{item.PhoneNumber}</td>
                                        <td class="d-none d-sm-table-cell ">{item.PersonalID}</td>
                                        <td class="d-none d-sm-table-cell ">{item.PersonalIDNumber}</td>
                                        <td>
                                            <button onClick={removeTenant(item)} class="btn btn-danger m-1">Remove</button>
                                            <button onClick={editTenant(item)} class="btn btn-primary m-1">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </> : <>
                            <tbody>
                                <td colspan="6" class="text-center p-2 m-2">
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