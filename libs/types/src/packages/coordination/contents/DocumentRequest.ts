export const DocumentRequest = {
  description:
    "Source type describing an event or request that originated from another Blue document. A Document Request source lets a\nprovider or processor say that an action was not initiated directly by a browser session or API credential, but by a\ndocument process identified by `documentId` and optionally an `epoch` or version.\n\nThis is useful for document-to-document workflows where one Blue document asks another to perform an operation, create a\nchild document, request information, or respond to an embedded process. Actor and Source policies can use Document\nRequest to distinguish autonomous document orchestration from direct principal UI actions.\n\n`documentId` identifies the sending or requesting document. `epoch` can distinguish versions, processing epochs, or\nreplay windows according to the provider's protocol.\n",
  documentId: {
    description: 'Identifier of the document that triggered the request.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  epoch: {
    description: 'Epoch of the source document when the request was emitted.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Document Request',
  type: {
    blueId: '52ECLkcYGohcQEaora7hAbd5ve7Uz85DjE2nEARr55Lk',
  },
} as const;
