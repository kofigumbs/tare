(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.Tare = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  const columns = (...ss) => (
    ss.map(s => `<div style="display:flex;flex-direction:column;flex:1;" aria-hidden="true">${s.join('')}</div>`).join('')
  );

  const s = (ratio, styles, layout = 'position:absolute;top:0;left:0;width:100%;height:100%;') => `
    <div style="position:relative;${ratio}">
      <div style="box-sizing:border-box;${layout}${styles}"></div>
    </div>
  `;
  const fill = 'flex:1;';
  const square = 'height:0;padding-bottom:100%;overflow:hidden;max-width:100%;';
  const none = '';
  const top = 'border-top-style:solid;';
  const left = 'border-left-style:solid;';
  const right = 'border-right-style:solid;';
  const bottom = 'border-bottom-style:solid;';
  const topLeftRadius = 'border-top-left-radius:100%;';
  const topRightRadius = 'border-top-right-radius:100%;';
  const bottomLeftRadius = 'border-bottom-left-radius:100%;';
  const bottomRightRadius = 'border-bottom-right-radius:100%;';
  const alignBottom = 'top:unset;bottom:0;';

  const centerStem = height => s('flex:1;text-align:center;', right, `display:inline-block;${height}`);
  const fullHeight = 'height:100%;';
  const halfHeight = 'height:50%;';

  const symbols = new Map([
    ['A', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, top + left),
        s(fill, left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, top + right),
        s(fill, right),
      ],
    )],
    ['B', columns(
      [
        s(fill, top + left),
        s(fill, bottom + left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['C', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, none),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['D', columns(
      [
        s(square, top + left),
        s(fill, bottom + left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['E', columns(
      [
        s(fill, top + left),
        s(fill, top + left),
        s(fill, bottom + left),
      ],
      [
        s(fill, top),
        s(fill, none),
        s(fill, bottom),
      ],
    )],
    ['F', columns(
      [
        s(fill, top + left),
        s(fill, top + left),
        s(fill, left),
      ],
      [
        s(fill, top),
        s(fill, none),
      ],
    )],
    ['G', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, bottom),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['H', columns(
      [
        s(fill, bottom + left),
        s(fill, left),
      ],
      [
        s(fill, bottom + right),
        s(fill, right),
      ],
    )],
    ['I', columns(
      [
        s(none, top),
        centerStem(fullHeight),
        s(none, top + alignBottom),
      ],
    )],
    ['J', columns(
      [
        s(fill, none),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['K', columns(
      [
        s(fill, bottom + left),
        s(fill, left),
      ],
      [
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
        s(square, top + right + topRightRadius),
        s(fill, right),
      ],
    )],
    ['L', columns(
      [
        s(fill, bottom + left),
      ],
      [
        s(fill, bottom),
      ],
    )],
    ['M', columns(
      [
        s(square, top + left),
        s(fill, left),
      ],
      [
        s(none, top),
        centerStem(halfHeight),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
      ],
    )],
    ['N', columns(
      [
        s(square, top + left),
        s(fill, left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
      ],
    )],
    ['O', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['P', columns(
      [
        s(square, top + left),
        s(fill, left),
        s(square, bottom + left),
        s(fill, left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
        s(fill, none),
      ],
    )],
    ['Q', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(fill, top + bottom + left + right),
      ],
    )],
    ['R', columns(
      [
        s(fill, top + left),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, right),
      ],
    )],
    ['S', columns(
      [
        s(square, top + left + topLeftRadius),
        s(fill, left),
        s(square, top),
        s(fill, none),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(square, top + right + topRightRadius),
        s(fill, none),
        s(square, top + right + topRightRadius),
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['T', columns(
      [
        s(fill, top),
      ],
      [
        s(none, top),
        centerStem(fullHeight),
      ],
      [
        s(fill, top),
      ],
    )],
    ['U', columns(
      [
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
      ],
      [
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['V', columns(
      [
        s(fill, left),
        s(square, bottom + left),
      ],
      [
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['W', columns(
      [
        s(fill, left),
        s(square, bottom + left),
      ],
      [
        centerStem(fullHeight),
        s(none, top + alignBottom),
      ],
      [
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
      ],
    )],
    ['X', columns(
      [
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
        s(square, top + left + topLeftRadius),
        s(fill, left),
      ],
      [
        s(fill, right),
        s(square, bottom + right + bottomRightRadius),
        s(square, top + right + topRightRadius),
        s(fill, right),
      ],
    )],
    ['Y', columns(
      [
        s(fill, left),
        s(square, bottom + left + bottomLeftRadius),
        s(fill, none),
      ],
      [
        s(fill, right),
        s(square, bottom + right),
        s(fill, right + bottom),
      ],
    )],
    ['Z', columns(
      [
        s(fill, top),
        s(square, top + left + topLeftRadius),
        s(fill, bottom + left),
      ],
      [
        s(fill, top + right),
        s(square, bottom + right + bottomRightRadius),
        s(fill, bottom),
      ],
    )],
    [' ', columns(
      [
        s(fill, none),
      ],
    )],
  ]);

  return {
    html(text) {
      return `
        <div style="display:flex;flex-direction:row;" aria-label="${text.replace('"', '&quot;')}" data-tare>
          ${Array.from(text.toUpperCase()).map(symbol => symbols.get(symbol)).filter(x => x).join('<div aria-hidden="true" data-tare-separator></div>')}
        </div>
      `;
    }
  };
}));
