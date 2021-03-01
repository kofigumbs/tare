# Tare

<u>Ta</u>ll, <u>re</u>sponsive psudo-font, built with flexbox and borders.
Built for brutalist visualizations.


```html
<!DOCTYPE html>
<style>
  html, body {
    height: 100%;
    overflow: hidden;
  }
  [data-tare] {
    height: 50%;
    border: solid 40px white;
    box-sizing: border-box;
  }
  [data-tare] * {
    border-width: 10px;
  }
  [data-tare-separator] {
    width: 20px;
    height: 100%;
  }
</style>
<body>
  <script src="./index.js"></script>
  <script>document.body.innerHTML = Tare.html("abcdefghijklmn") + Tare.html("opqrstuvwxyz");</script>
</body>
```

Tare supports letters (always converted to uppercase) and the space character.
