import T from './template.json';
import C from './characters.json';

const render = (template, args) => template.replaceAll('{}', () => args.shift());

const s = (outer, inner) => render(T.s, [outer, T.defaultLayout + inner]);
const v = (height) => render(T.s, [T.vOuter, T.vInner + T.right + height]);

const draw = (commands) => commands.map(([command, ...options]) => {
  switch (command) {
    case 's': return s(T[options[0]], options.slice(1).map(x => T[x]).join(''));
    case 'v': return v(T[options[0]]);
    default: throw new Error();
  }
});

const characters = new Map();
for (let [character, columns] of Object.entries(C)) {
  characters.set(character, render(T.character, [
    columns.length,
    character,
    columns.map(commands => render(T.column, [draw(commands).join('')])).join('')
  ]));
}

export default {
  html: (text) => render(T.html, [
    text.replaceAll('"', '&quot;'),
    Array.from(text.toUpperCase()).map(character => characters.get(character)).filter(x => x).join(''),
  ]),
};
