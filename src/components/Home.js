import React from 'react';
import Baselayout from '../layouts/Baselayout';
import Sponsor from '../layouts/Sponsor';

const Home = () => {
  return (
    <Baselayout>
      <div style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
        <div className="homeLogo" style={{ paddingTop: '1rem' }}>
          <div className="title">{`FESTIVAL 
        DU 
        GRAUX SON`}</div>
          <div className="edition info">2ème édition</div>
          <div className="info">
            <span>
              {`11-12-13 Octobre 2019
Tournai, Belgique`}
            </span>
          </div>
        </div>
        <Sponsor />
      </div>
    </Baselayout>
  );
};

export default Home;
