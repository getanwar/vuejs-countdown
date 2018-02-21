# vuejs-countdown
A simple countdown timer component for VueJS 2.

![screenshot](https://raw.githubusercontent.com/getanwar/vuejs-countdown/master/scr.png "Vue JS Countdown")

## Installation
#### npm

`npm i vuejs-countdown --save`


## Usage

```html
<template>
  <div>
    <Countdown deadline="August 22, 2022"></Countdown>
    or 
    <Countdown end="August 22, 2022"></Countdown>
  </div>
</template>
```

```javascript
<script>
import Countdown from 'vuejs-countdown'

export default {
  components: { Countdown }
}
</script>
```

## Other Config

You can stop the countdown timer anytime by passing `true` (Boolean) with `stop` props.


### Caution 

Please don't provide any confusing date format since it has no dependency to Moment.js or any other date helpers.