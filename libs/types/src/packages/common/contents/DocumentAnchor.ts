export const DocumentAnchor = {
  description:
    'One named connection point where matching documents can link in.\nAnchor entries are typically used inline inside `Common/Document Anchors`\nand can describe the expected matching document shape through `template`.\n',
  name: 'Document Anchor',
  template: {
    description:
      'Optional Blue document-shaped template describing what matches this anchor.\nIt may be a minimal `{ type, kind }` hint or a richer nested document shape.\n',
  },
} as const;
