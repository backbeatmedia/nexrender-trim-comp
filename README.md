# nexrender-action-trim-comp

This plugin trims the work area of a comp to the duration of a layer, plus an optional, configurable handle.

## Install

`npm install nexrender-trim-comp`

## How to use

1. Add this module as a pre-download action
2. Add the name of the `layer`to measure
2. If required, add a value of `handle` in seconds as a parameter.
3. The render comp work area will be trimmed to the end point of the selected layer, plus the handle



```json
{
    "template": {
        "src": "http://www.foo.com/template.aep",
        "composition": "used-as-a-template"
    },
    "actions": {
        "predownload": [
            {
                "module": "nexrender-trim-comp",
                "layer": "[YOUR LAYER NAME HERE]",
                "handle": 0.0 // optional floating point value
            }
        ],

```

## Notes

This plugin is based on the excellent MOGRT action which you can find here
https://github.com/vonstring/nexrender-action-mogrt-template

