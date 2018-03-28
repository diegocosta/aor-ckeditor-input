import React from 'react';
import get from 'lodash.get';
import CKEditor from "react-ckeditor-component";

const CKEditorInput = ({ record, source, input }) => (
  <CKEditor
    content={get(record, source)}
    events={{
      change: e => input.onChange(e.editor.getData())
    }}
  />
);

CKEditorInput.defaultProps = {
  addField: true
};

export default CKEditorInput;