import React from "react";

const Layout=({children})=>{
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default Layout