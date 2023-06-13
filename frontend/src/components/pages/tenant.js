

const Tenant = () => {
   const isEditMode = false;
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <h4>Tenant </h4>
                </div>

                <form>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Name
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    {/* <div className="row my-2 form-group">
            <div className="col-md-6">
                {{constant.RoomNumber}}
            </div>
            <div className="col-md-6">


                <ng-container *ngIf="isEditMode ;else readonlyMode">
                    <select className="form-control" (change)="changeRoom($event)" formControlName="RoomNumber">
                        <option value=""> {{constant.Choose}}{{constant.Room}} </option>
                        <option *ngFor="let item of roomList" [value]="'/'+environment.collectionList.Rooms+'/'+item.key">
                            {{ item.value }}
                        </option>
                    </select>
                    <div *ngIf="tenantForm.get('RoomNumber')?.invalid && 
                    (tenantForm.get('RoomNumber')?.dirty || tenantForm.get('RoomNumber')?.touched)">
                        <span>
                            <label className="text-danger">{{constant.RoomNumber}} Can not be empty</label>
                        </span>
                    </div>
                </ng-container>
                <ng-template #readonlyMode>
                    <input [value]="currentTenant?.RNumber" className="form-control" readonly />
                </ng-template>
            </div>
        </div> */}
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                           Phone Number
                        </div>
                        <div className="col-md-6">
                            <input formControlName="PhoneNumber" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Father Name 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="FatherName" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Father Phone Number 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="FatherPhoneNumber" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            College 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="College" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            Course 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="Course" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PersonalID
                        </div>
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="pan-card" formControlName="PersonalID"
                                    value="Pan Card"/>
                                    <label className="form-check-label" for="pan-card">Pan Card</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" id="aadhar" className="form-check-input" formControlName="PersonalID"
                                    value="Addhar Card"/>
                                    <label className="form-check-label" for="aadhar">Adhar Card</label>
                            </div>
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PersonalIDNumber 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="PersonalIDNumber" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                           StayFrom 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="StayFrom" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            RentTill 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="RentPaidTill" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="row my-2 form-group">
                        <div className="col-md-6">
                            PermanentAddress 
                        </div>
                        <div className="col-md-6">
                            <input formControlName="PermanentAddress" className="form-control" readonly={!isEditMode} />
                        </div>
                    </div>
                    <div className="form-group" >
                    {/* *ngIf="isEditMode" */}
                    <button  className="btn btn-primary" type="submit"> Submit </button>
                    {/* [disabled]="tenantForm.invalid && validateForm()" (click)="onSubmit()" */}
            </div>
        </form >

</div >
        </>
    )
}

export default Tenant;