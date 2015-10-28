# markoshust:nouislider

## Add noUISlider to Meteor

`meteor add markoshust:nouislider`

Pulls library from the <a href="https://www.npmjs.com/package/nouislider" target="_blank">`nouislider` NPM repo</a>.

## Usage

Add the following to your onRendered (blaze) or componentDidMount (react) function:

```
noUiSlider.create(document.getElementById("slider"), {
  connect: "lower",
  range: {
    min: 0,
    max: 100
  },
  start: 50
});
```

## Documentation

See the wonderful noUISlider project at <a href="https://github.com/leongersen/noUiSlider" target="_blank">https://github.com/leongersen/noUiSlider</a> for more documention.
