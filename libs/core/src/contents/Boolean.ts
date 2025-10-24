export const boolean = {
  description:
    'Primitive scalar with exactly two values: true and false.\n- Authoring & wrappers:\n    detail: >\n      Scalar sugar (x: true) and wrapped form (x: { value: true }) are\n      equivalent; canonical hashing uses the wrapped form (§8.2.2). The type\n      does NOT declare `value` because it is an instance-level wrapper; adding\n      it to the type would fix a payload on the type object (§2.1, §4.1).\n\n- Semantics:\n    detail: >\n      No truthiness beyond the two literals; only `true` and `false` are valid.\n\n- Equality & enums:\n    detail: >\n      Equality (incl. `enum`) compares the parsed boolean value; canonical JSON\n      atoms are lower-case `true` / `false`.\n',
  name: 'Boolean',
} as const;
