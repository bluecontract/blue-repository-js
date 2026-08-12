export const CdmLegaldocumentationCommonResource: Record<string, unknown> = {
  comments: {
    description:
      'Any additional comments that are deemed necessary. For example, which software version is required to open the document? Or, how does this resource relate to the others for this event?\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Describes the resource that contains the media representation of a business event (i.e used for stating the Publicly Available Information). For example, can describe a file or a URL that represents the event. This type is an extended version of a type defined by RIXML (www.rixml.org).  Rosetta restricts the FpML implementation by not providing the ability to associated a document in hexadecimalBinary or base64Binary until such time that actual use cases will come up.\n',
  language: {
    description:
      'Indicates the language of the resource, described using the ISO 639-2/T Code.',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  length: {
    description:
      'Indicates the length of the resource. For example, if the resource were a PDF file, the length would be in pages.\n',
    type: {
      blueId: '774eqeqTPdD7YGYPSVTQQ7NNBf5v5z8n5MppuAhC84Ro',
    },
  },
  mimeType: {
    description:
      'Indicates the type of media used to store the content. mimeType is used to determine the software product(s) that can read the content. MIME Types are described in RFC 2046.\n',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  name: 'cdm/legaldocumentation/common/Resource',
  resourceId: {
    description:
      'The unique identifier of the resource within the event. FpML specifies this element of type resourceIdScheme but with no specified value.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  resourceType: {
    description:
      'A description of the type of the resource, e.g. a confirmation.',
    type: {
      blueId: '2csbatPyULPRBcWxMJBAqZeKStFUW9jtSY6H3Dew3EGE',
    },
  },
  sizeInBytes: {
    description:
      'Indicates the size of the resource in bytes. It could be used by the end user to estimate the download time and storage needs.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  string: {
    description:
      'Provides extra information as string. In case the extra information is in XML format, a CDATA section must be placed around the source message to prevent its interpretation as XML content.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  url: {
    description:
      'Indicates where the resource can be found, as a URL that references the information on a web server accessible to the message recipient.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
