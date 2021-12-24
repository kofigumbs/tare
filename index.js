import T from './lib/template.json';
import C from './lib/characters.json';

const concat = (...parts) => parts.join('');

const s = (ratio, styles, layout = T.defaultLayout) => concat(T.s[0], ratio, T.s[1], layout, styles, T.s[2]);
const v = (height) => s(T.v[0], T.right, concat(T.v[1], height));

const draw = (commands) => commands.map(([command, ...options]) => {
  switch (command) {
    case 's': return s(T[options[0]], options.slice(1).map(x => T[x]).join(''));
    case 'v': return v(T[options[0]]);
    default: throw new Error();
  }
});

const characters = new Map();
for (let [character, columns] of Object.entries(C)) {
  characters.set(character, concat(
    T.character[0],
    columns.length,
    T.character[1],
    character,
    T.character[2],
    columns.map(commands => concat(T.character[3], draw(commands).join(''), T.character[4])).join(''),
    T.character[5]
  ));
}

export default {
  html: (text) => concat(
    T.html[0],
    text.replace('"', '&quot;'),
    T.html[1],
    Array.from(text.toUpperCase()).map(character => characters.get(character)).filter(x => x).join(''),
    T.html[2]
  ),
};
