import React from 'react';

const CardMenuPlaceholder = () => {
  const loop: number[] = [...Array(9)];

  return (
    <div className="container">
      <div className="row">
        {loop.map((_, index) => (
          <div key={index} className="col-4 mb-3 mt-3">
            <div className="card" style={{ width: '25rem', height: '18rem' }} aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6">Placeholder Text</span> {/* Exemplo de texto dentro do âncora */}
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7">Placeholder Text</span>
                  <span className="placeholder col-4">Placeholder Text</span>
                  <span className="placeholder col-4">Placeholder Text</span>
                  <span className="placeholder col-6">Placeholder Text</span>
                  <span className="placeholder col-8">Placeholder Text</span>
                </p>
                <div className="row mt-5">
                  <span className="placeholder col-5">Placeholder Text</span>
                  <span className="placeholder col-5">Placeholder Text</span>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn disabled placeholder col-6" aria-disabled="true">Placeholder Button</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMenuPlaceholder;
