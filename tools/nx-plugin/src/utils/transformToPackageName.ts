type Options = {
  keepTogether?: string[];
  splitAfter?: string[];
};

export function transformToPackageName(
  raw: string,
  {
    keepTogether = ['myos', 'paynote'],
    // Removed “https” – it was falsely matching the “HttpS” in “HttpServer”
    // and producing “http-s-erver”. The standard camel-case logic still
    // gives us the correct “https-…” boundary when the string really *is*
    // HTTPS-something.
    splitAfter = ['http', 'api', 'xml', 'os'], // longest first
  }: Options = {}
): string {
  if (!raw) return '';

  /* 1. strip trailing “V1.0.3” etc. */
  let str = raw.replace(/V\d+(?:\.\d+)*$/i, '');

  /* 2. force boundaries after any token in splitAfter */
  for (const token of [...splitAfter].sort((a, b) => b.length - a.length)) {
    const source =
      token.toLowerCase() === 'http'
        ? 'http(?!s)(?=[A-Z])' // don’t fire inside “https”
        : `${token}(?=[A-Z])`;
    str = str.replace(new RegExp(source, 'gi'), (m) => `${m}-`);
  }

  /* 3. normal camel/Pascal → kebab */
  str = str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2');

  /* 4. special characters, case, hyphen clean-up */
  str = str
    .replace(/@/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  /* 5. collapse any keep-together tokens back to a single word */
  for (const token of keepTogether.map((t) => t.toLowerCase())) {
    const hyphenated = token.split('').join('-?');
    str = str.replace(
      new RegExp(`(^|-)${hyphenated}(?=-|$)`, 'g'),
      (_, p) => `${p}${token}`
    );
    str = str.replace(
      new RegExp(`(^|-)${token}(?=[a-z0-9])`, 'g'),
      (_, p) => `${p}${token}-`
    );
  }

  return str;
}
