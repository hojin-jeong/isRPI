
# isRPI
[![GitHub](https://img.shields.io/github/license/hojin-jeong/isRPI)](https://github.com/hojin-jeong/isRPI/blob/master/license.md)
[![npm](https://img.shields.io/npm/v/isrpi)](https://badge.fury.io/js/isrpi)

> RaspberryPI Check with parse board information. lightweight, no dependencies, pure javascript

# Quick Start

## Installation
```shell
npm install isrpi
```

## Basic Usage
```javascript
const isRPI = require("isrpi")

console.log(isRPI())
```

### Output

from Raspberry PI 3B
```json
{
  "warrentyBit": "Warranty has been voided by overclocking",
  "revisionFlag": "new-style revision",
  "memorySize": "1GB",
  "manufacturer": "Sony UK",
  "processor": "BCM2837",
  "model": "3B",
  "revision": "1.2"
}
```

from Raspberry PI 4
```json
{
  "warrentyBit": "Warranty is intact",
  "revisionFlag": "new-style revision",
  "memorySize": "2GB",
  "manufacturer": "Sony UK",
  "processor": "BCM2711",
  "model": "4B",
  "revision": "1.1"
}
```

from PC
```json
false
```