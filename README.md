# Tare

<b>Ta</b>ll, <b>re</b>sponsive psudo-font, built with flexbox and borders.
Made for brutalist visualizations.

<img src="/demo.gif" alt="Demo GIF">

```html
<!DOCTYPE html>
<style>
  [data-tare] {
    height: 42vh;
    margin: 5vh 5vw;
  }
  [data-tare-character] * {
    border-width: 10px;
  }
  [data-tare-character] + [data-tare-character] {
    margin-left: 20px;
  }
</style>
<body>
  <script src="./dist/tare.min.js"></script>
  <script>
    document.body.innerHTML += Tare.html("abcdefghijklmn");
    document.body.innerHTML += Tare.html("opqrstuvwxyz");
  </script>
</body>
```
