import React from 'react';
import './styles.scss';
import loadingGif from '../../assets/images/loading.gif'

function Loader() {
  return (
        <div className="col-12" id="loading">
          <div className="d-flex justify-content-center">
            <div className="snippet">
             
              <div className="stage">
               <img src={loadingGif} alt=""/>
              </div>
            </div>
          </div>
        </div>
      );
}

export {Loader};
