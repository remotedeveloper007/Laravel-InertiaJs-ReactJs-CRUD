import React from "react";
import Front from "../layouts/Front";

const App = () => {
    return (
        <Front title="Home Page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Dashboard</div>

                            <div className="card-body">
                                
                                You are logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Front>
    );
};

export default App;
