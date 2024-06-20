import React from 'react';

const CardMenuPlaceholder = () => {
  const loop: number[] = [...Array(9)];

  return (
    <div className="container">
      <div className="row">
        {loop.map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-3 mt-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <div className="row mt-5">
                  <span className="placeholder col-5"></span>
                  <span className="placeholder col-5"></span>
                </div>
              </div>
              <div className="card-footer">
                <a
                  className="btn disabled placeholder col-6"
                  aria-disabled="true"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMenuPlaceholder;
