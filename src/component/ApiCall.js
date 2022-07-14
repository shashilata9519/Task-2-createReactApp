import React, { useEffect, useState } from "react";

import "../component/style.css";

function ApiCall() {
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(false);

    const response = await fetch("https://reqres.in/api/users?page=1");
    const userRes = await response.json();

    setData(userRes["data"]);
  };
  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Candidate details</h1>
          <button className="btn btn-outline-info" onClick={fetchData}>
            GET DATA
          </button>
        </div>
      </nav>
      <div  className="bg">
        {isLoading && (
          <div className="ring">
            Loading
            <span></span>
          </div>
        )}
        <div className="container">
          <div className="row">
            {datas.map((cur) => {
              return (
                <>
                  <div className="col-10 col-md-4 mx-auto mt-5 main-div" key={cur.id}>
                   
                    <div className="card p-2 detail">
                      <img
                        src={cur.avatar}
                        
                        alt="..."
                      />
                      <div className="details">
                        <div>
                        <h5 className="card-title">{cur.first_name} {cur.last_name}</h5>
                        <p>{cur.email}</p>

                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiCall;
