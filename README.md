# `<CKEditorInput>` for admin-on-rest

Port of [react-ckeditor-component](https://github.com/codeslayer1/react-ckeditor) for [admin-on-rest](https://github.com/marmelab/admin-on-rest).

[![aor-ckeditor-input](https://nodei.co/npm/aor-ckeditor-input.png)](https://npmjs.org/package/aor-ckeditor-input)

## Installation

```sh
yarn add aor-ckeditor-input
```

## Usage
```js
import React from 'react';
import { Create } from 'admin-on-rest';
import CKEditorInput from 'aor-ckeditor-input';

const PostCreate = () => (
    <Create>
        <CKEditorInput source="content"/>
    </Create>
);
```

