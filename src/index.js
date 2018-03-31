import React from 'react';
import get from 'lodash.get';
import CKEditor from "react-ckeditor-component";

const CKEditorInput = props => (
  <CKEditor
    content={get(props.record, props.source)}
    events={{
      change: e => props.input.onChange(e.editor.getData())
    }}
    {...props}
  />
);

CKEditorInput.defaultProps = {
  addField: true
};

export default CKEditorInput;