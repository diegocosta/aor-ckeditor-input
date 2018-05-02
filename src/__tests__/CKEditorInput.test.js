import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CKEditorInput from '../index';

const props = {
  meta: {},
};

describe('CKEditorInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CKEditorInput {...props} />, div);
  });

  it('renders activeClass correctly', () => {
    const localProps = {
      ...props,
      activeClass: 'aor-test',
    };

    const tree = renderer
      .create(<CKEditorInput {...localProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders error message correctly', () => {
    const localProps = {
      ...props,
      meta: {
        touched: true,
        error: 'Required',
      },
    };

    const tree = renderer
      .create(<CKEditorInput {...localProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
