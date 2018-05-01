/* eslint-disable react/prop-types */

import React from 'react';
import get from 'lodash.get';
import CKEditor from 'react-ckeditor-component';

const CKEditorInput = props => (
  <div className="aor-ckeditor-input">
    <CKEditor
      content={get(props.record, props.source)}
      events={{
        change: e => props.input.onChange(e.editor.getData()),
      }}
      {...props}
    />
    {(props.meta.touched && props.meta.error) &&
      <div className="error">{props.meta.error}</div>}
  </div>
);

CKEditorInput.defaultProps = {
  addField: true,
};

export default CKEditorInput;
