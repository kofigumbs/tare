(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.Tare = factory();
}(typeof self !== 'undefined' ? self : this, function () {
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
      s(fill, left),
      s(square, top + left),
      s(fill, left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, right),
      s(square, top + right),
      s(fill, right),
    ]
  ]);
  defineCharacter('B', [
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
    ]
  ]);
  defineCharacter('C', [
    [
      s(square, top + left + topLeftRadius),
      s(fill, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, none),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('D', [
    [
      s(square, top + left),
      s(fill, bottom + left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('E', [
    [
      s(fill, top + left),
      s(fill, top + left),
      s(fill, bottom + left),
    ],
    [
      s(fill, top),
      s(fill, none),
      s(fill, bottom),
    ]
  ]);
  defineCharacter('F', [
    [
      s(fill, top + left),
      s(fill, top + left),
      s(fill, left),
    ],
    [
      s(fill, top),
      s(fill, none),
    ]
  ]);
  defineCharacter('G', [
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
    ]
  ]);
  defineCharacter('H', [
    [
      s(fill, bottom + left),
      s(fill, left),
    ],
    [
      s(fill, bottom + right),
      s(fill, right),
    ]
  ]);
  defineCharacter('I', [
    [
      s(none, top),
      centerStem(fullHeight),
      s(none, top + alignBottom),
    ]
  ]);
  defineCharacter('J', [
    [
      s(fill, none),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right),
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('K', [
    [
      s(fill, bottom + left),
      s(fill, left),
    ],
    [
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
      s(square, top + right + topRightRadius),
      s(fill, right),
    ]
  ]);
  defineCharacter('L', [
    [
      s(fill, bottom + left),
    ],
    [
      s(fill, bottom),
    ]
  ]);
  defineCharacter('M', [
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
    ]
  ]);
  defineCharacter('N', [
    [
      s(square, top + left),
      s(fill, left),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, right),
    ]
  ]);
  defineCharacter('O', [
    [
      s(square, top + left + topLeftRadius),
      s(fill, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('P', [
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
    ]
  ]);
  defineCharacter('Q', [
    [
      s(square, top + left + topLeftRadius),
      s(fill, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(square, top + right + topRightRadius),
      s(fill, right),
      s(fill, top + bottom + left + right),
    ]
  ]);
  defineCharacter('R', [
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
    ]
  ]);
  defineCharacter('S', [
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
    ]
  ]);
  defineCharacter('T', [
    [
      s(fill, top),
    ],
    [
      s(none, top),
      centerStem(fullHeight),
    ],
    [
      s(fill, top),
    ]
  ]);
  defineCharacter('U', [
    [
      s(fill, left),
      s(square, bottom + left + bottomLeftRadius),
    ],
    [
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('V', [
    [
      s(fill, left),
      s(square, bottom + left),
    ],
    [
      s(fill, right),
      s(square, bottom + right + bottomRightRadius),
    ]
  ]);
  defineCharacter('W', [
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
    ]
  ]);
  defineCharacter('X', [
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
    ]
  ]);
  defineCharacter('Y', [
    [
      s(fill, left),
      s(square, bottom + left + bottomLeftRadius),
      s(fill, none),
    ],
    [
      s(fill, right),
      s(square, bottom + right),
      s(fill, right + bottom),
    ]
  ]);
  defineCharacter('Z', [
    [
      s(fill, top),
      s(square, top + left + topLeftRadius),
      s(fill, bottom + left),
    ],
    [
      s(fill, top + right),
      s(square, bottom + right + bottomRightRadius),
      s(fill, bottom),
    ]
  ]);
  defineCharacter(' ', [
    [
      s(fill, none),
    ]
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
