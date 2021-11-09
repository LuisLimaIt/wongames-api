import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        &nbsp;
        <A
        key="website"
        href="https://github.com/luislimait"
        target="_blank"
        rel="noopener noreferrer">
          React Avançado
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
