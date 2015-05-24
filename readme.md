# travis-status-element

> Custom element for Travis status badges

## Usage

```
$ bower install --save travis-status-element
```

```html
<script src="bower_components/travis-status-element/dist/travis-status.js"></script>
```

```html
<img is="travis-element" repo="image-extensions" username="arthurvr">
```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`username`    | *string*    | `null`       | **Required.** Username
`repo`        | *string*    | `null`       | **Required.** Name of the repo
`branch`      | *string*    | `master`     | Branch

## Development

To install development dependencies:

```
$ npm install
```

To build the `dist` file use:

```
$ gulp build
```

To run the tests, use:

```
$ gulp test:local
```

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
