import React from 'react'

const Trip = () => {
    return (
        <>
        <div className="trips_wrap full colored">
         <div className="container">
            <div className="row m-0">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="trips">
                <div className="trips_icons">
                    <i className="ti-video-camera" />
                </div>
                <div className="trips_detail">
                    <h4>100,000 online courses</h4>
                    <p>Nor again is there anyone who loves or pursues or desires</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="trips">
                <div className="trips_icons">
                    <i className="ti-medall" />
                </div>
                <div className="trips_detail">
                    <h4>Expert instruction</h4>
                    <p>Nam libero tempore, cum soluta and nobis est eligendi optio</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="trips none">
                <div className="trips_icons">
                    <i className="ti-infinite" />
                </div>
                <div className="trips_detail">
                    <h4>Lifetime access</h4>
                    <p>These cases are perfectly simple and easy to distinguish</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default Trip
