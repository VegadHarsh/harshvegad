import React from 'react'

function Breadcrumb({title, path}) {
    return (
        <>
            <div
                className="breadcrumb-option spad set-bg"
                style={{ backgroundImage: `url("img/breadcrumb-bg.jpg")` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{title}</h2>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    {path.map((item, index) => (
                                        <span key={index}>
                                            {/* {index > 0 && " > "} */}
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
