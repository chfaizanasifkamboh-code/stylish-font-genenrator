/**
 * FixPoint Care - Stylish Font Engine Dataset
 * Complete client-side Unicode mappings for zero-latency, serverless conversions.
 */

const FONT_MAPS = {
  gothic: {
    name: "Old English / Gothic",
    category: "classic",
    map: {
      A: "𝔄", B: "𝔅", C: "  ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: " ❤❤ ", I: "  ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "  ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "  ",
      a: "𝔞", b: "𝔔", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔟", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
    }
  },
  cursive: {
    name: "Elegant Cursive Script",
    category: "elegant",
    map: {
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "X", Y: "Y", Z: "𝓩",
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓿", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    }
  },
  doubleStruck: {
    name: "Double-Struck / Outline",
    category: "modern",
    map: {
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  monospace: {
    name: "Retro Monospace / Code",
    category: "modern",
    map: {
      A: "𝚠", B: "𝚇", C: "𝚈", D: "𝚉", E: "𝚨", F: "𝚩", G: "𝚪", H: "𝚫", I: "𝚬", J: "𝚭", K: "𝚮", L: "𝚯", M: "𝚰", N: "𝚱", O: "𝚲", P: "𝚳", Q: "𝚴", R: "𝚵", S: "𝚶", T: "𝚷", U: "𝚸", V: "𝚹", W: "𝚺", X: "𝚻", Y: "𝚼", Z: "𝚽",
      a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
    }
  },
  circles: {
    name: "Bubble Text / Circles",
    category: "creative",
    map: {
      A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
      a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
    }
  },
  squares: {
    name: "Block Text / Squares",
    category: "creative",
    map: {
      A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
      a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
    }
  },
  parenthesis: {
    name: "Parenthesis Wrapped",
    category: "creative",
    map: {
      A: "⒜", B: "⒝", C: "⒞", D: "⒟", E: "⒠", F: "⒡", G: "⒢", H: "⒣", I: "⒤", J: "⒥", K: "⒦", L: "⒧", M: "⒨", N: "⒩", O: "⒪", P: "⒫", Q: "⒬", R: "⒭", S: "⒮", T: "⒯", U: "⒰", V: "⒱", W: "⒲", X: "⒳", Y: "⒴", Z: "⒵",
      a: "⒜", b: "⒝", c: "⒞", d: "⒟", e: "⒠", f: "⒡", g: "⒢", h: "⒣", i: "⒤", j: "⒥", k: "⒦", l: "⒧", m: "⒨", n: "⒩", o: "⒪", p: "⒫", q: "⒬", r: "⒭", s: "⒮", t: "⒯", u: "⒰", v: "⒱", w: "⒲", x: "⒳", y: "⒴", z: "⒵"
    }
  },
smallCaps: {
  name: "Premium Small Caps",
  category: "modern",
  map: {
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
  }
}

};

// Procedural / Functional Transformation Rules (Handles text manipulation arrays dynamically)
const PROCEDURAL_STYLES = [
  {
    id: "vaporwave",
    name: "V a p o r w a w e  /  S p a c e d",
    category: "aesthetic",
    transform: (text) => text.split("").join(" ")
  },
  {
    id: "mirrored",
    name: "Mirrored / Backwards",
    category: "aesthetic",
    transform: (text) => text.split("").reverse().join("")
  },
  {
    id: "underlined",
    name: "̳U̳n̳d̳e̳r̳l̳i̳n̳e̳d̳ ̳E̳f̳f̳e̳c̳t̳",
    category: "elegant",
    transform: (text) => text.split("").map(char => char + "\u0333").join("")
  },
  {
    id: "starry",
    name: "✨ Star Decorated ✨",
    category: "creative",
    transform: (text) => `✨ ${text} ✨`
  }
];

/**
 * Global API function used by the main UI controller to transform strings instantly.
 * @param {string} inputText - Raw alphanumeric string input
 * @returns {Array} List of objects containing style configurations and transformed values
 */
function transformText(inputText) {
  const results = [];
  const text = inputText || "Type something beautiful...";

  // 1. Process standard alphanumeric map replacements
  Object.keys(FONT_MAPS).forEach(key => {
    const fontObj = FONT_MAPS[key];
    let output = "";
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      output += fontObj.map[char] || char; // Fallback to original character if mapping is absent
    }

    results.push({
      id: key,
      name: fontObj.name,
      category: fontObj.category,
      value: output,
      isPlaceholder: !inputText
    });
  });

  // 2. Process custom procedural string modifiers
  PROCEDURAL_STYLES.forEach(style => {
    results.push({
      id: style.id,
      name: style.name,
      category: style.category,
      value: style.transform(text),
      isPlaceholder: !inputText
    });
  });

  return results;
}
