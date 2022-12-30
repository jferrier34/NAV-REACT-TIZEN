import React from 'react';
import { render } from 'react-dom';
import SpatialNavigation, { Focusable, FocusableSection } from 'react-js-spatial-navigation'

function focus1() {
  console.log('focused 1')
}

function unfocus2() {
  console.log('unfocus 2')
}

const App = () => (
  <SpatialNavigation>
    <Focusable onFocus={focus1}>
      <p>Element 1</p>
    </Focusable>
    <Focusable onUnfocus={unfocus2}>
      <p>Element 2</p>
    </Focusable>

    <FocusableSection defaultElement="active">
      <Focusable>
        <p>Element 3</p>
      </Focusable>
      <Focusable className="active">
        <p>Element 4</p>
      </Focusable>
    </FocusableSection>
  </SpatialNavigation>
);

render(<App />, document.getElementById('root'));
