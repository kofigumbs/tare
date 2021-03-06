(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else if(typeof exports === 'object')
    exports['Tare'] = factory();
  else
    root.Tare = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  const s = (ratio, styles, layout = 'position:absolute;top:0;left:0;width:100%;height:100%;') => `
    <div style="position:relative;${ratio}">
      <div style="box-sizing:border-box;${layout}${styles}"></div>
    </div>
  `;
  const expand = 'flex:1;';
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

  const definitions = new Map();
  const defineCharacter = (character, columns) => {
    definitions.set(character, `
      <div style="display:flex;flex-direction:row;flex:${columns.length};" data-tare-character="${character}">
        ${columns.map(s => `<div style="display:flex;flex-direction:column;flex:1;">${s.join('')}</div>`).join('')}
      </div>
    `);
  };

  defineCharacter('A', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, top + left),
      s(expand, left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, top + right),
      s(expand, right),
    ],
  ]);
  defineCharacter('B', [
    [
      s(expand, top + left),
      s(expand, bottom + left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('C', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, none),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('D', [
    [
      s(square, top + left),
      s(expand, bottom + left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('E', [
    [
      s(expand, top + left),
      s(expand, top + left),
      s(expand, bottom + left),
    ],
    [
      s(expand, top),
      s(expand, none),
      s(expand, bottom),
    ],
  ]);
  defineCharacter('F', [
    [
      s(expand, top + left),
      s(expand, top + left),
      s(expand, left),
    ],
    [
      s(expand, top),
      s(expand, none),
    ],
  ]);
  defineCharacter('G', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, bottom),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('H', [
    [
      s(expand, bottom + left),
      s(expand, left),
    ],
    [
      s(expand, bottom + right),
      s(expand, right),
    ],
  ]);
  defineCharacter('I', [
    [
      s(none, top),
      centerStem(fullHeight),
      s(none, top + alignBottom),
    ],
  ]);
  defineCharacter('J', [
    [
      s(expand, none),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('K', [
    [
      s(expand, bottom + left),
      s(expand, left),
    ],
    [
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
      s(square, top + right + topRightRadius),
      s(expand, right),
    ],
  ]);
  defineCharacter('L', [
    [
      s(expand, bottom + left),
    ],
    [
      s(expand, bottom),
    ],
  ]);
  defineCharacter('M', [
    [
      s(square, top + left),
      s(expand, left),
    ],
    [
      s(none, top),
      centerStem(halfHeight),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
    ],
  ]);
  defineCharacter('N', [
    [
      s(square, top + left),
      s(expand, left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
    ],
  ]);
  defineCharacter('O', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('P', [
    [
      s(square, top + left),
      s(expand, left),
      s(square, bottom + left),
      s(expand, left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
      s(expand, none),
    ],
  ]);
  defineCharacter('Q', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(expand, top + bottom + left + right),
    ],
  ]);
  defineCharacter('R', [
    [
      s(expand, top + left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, right),
    ],
  ]);
  defineCharacter('S', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, top),
      s(expand, none),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(expand, none),
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('T', [
    [
      s(expand, top),
    ],
    [
      s(none, top),
      centerStem(fullHeight),
    ],
    [
      s(expand, top),
    ],
  ]);
  defineCharacter('U', [
    [
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('V', [
    [
      s(expand, left),
      s(square, bottom + left),
    ],
    [
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('W', [
    [
      s(expand, left),
      s(square, bottom + left),
    ],
    [
      centerStem(fullHeight),
      s(none, top + alignBottom),
    ],
    [
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('X', [
    [
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
      s(square, top + left + topLeftRadius),
      s(expand, left),
    ],
    [
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
      s(square, top + right + topRightRadius),
      s(expand, right),
    ],
  ]);
  defineCharacter('Y', [
    [
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
      s(expand, none),
    ],
    [
      s(expand, right),
      s(square, bottom + right),
      s(expand, right + bottom),
    ],
  ]);
  defineCharacter('Z', [
    [
      s(expand, top),
      s(square, top + left + topLeftRadius),
      s(expand, bottom + left),
    ],
    [
      s(expand, top + right),
      s(square, bottom + right + bottomRightRadius),
      s(expand, bottom),
    ],
  ]);
  defineCharacter(' ', [
    [
      s(expand, none),
    ],
  ]);
  defineCharacter('.', [
    [
      s(expand, none),
      s(square, top + bottom + left + right + topLeftRadius + topRightRadius + bottomLeftRadius + bottomRightRadius),
    ],
  ]);
  defineCharacter('(', [
    [
      s(square, top + left + topLeftRadius),
      s(expand, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
  ]);
  defineCharacter(')', [
    [
      s(square, top + right + topRightRadius),
      s(expand, right),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);
  defineCharacter('-', [
    [
      s(expand, bottom),
      s(expand, none),
    ],
  ]);
  defineCharacter('_', [
    [
      s(expand, bottom),
    ],
    [
      s(expand, bottom),
    ],
  ]);
  defineCharacter(',', [
    [
      s(expand, none),
      s(square, bottom + right + bottomRightRadius),
    ],
  ]);

  return {
    html(text) {
      return `
        <div style="display:flex;flex-direction:row;" aria-label="${text.replace('"', '&quot;')}" data-tare>
          ${Array.from(text.toUpperCase()).map(character => definitions.get(character)).filter(x => x).join('')}
        </div>
      `;
    }
  };
}));
