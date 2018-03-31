import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CKEditorInput from '../index';

describe('CKEditorInput', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CKEditorInput />, div);
    });

    it('renders activeClass correctly', () => {
        const tree = renderer
            .create(<CKEditorInput activeClass="aor-test" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})