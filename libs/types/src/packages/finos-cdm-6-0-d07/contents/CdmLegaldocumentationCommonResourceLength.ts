export const CdmLegaldocumentationCommonResourceLength: Record<
  string,
  unknown
> = {
  description: 'A class to indicate the length of the resource.',
  lengthUnit: {
    description:
      'The length unit of the resource. For example, pages (pdf, text documents) or time (audio, video files).',
    schema: {
      required: true,
    },
    type: {
      blueId: '6vcZYhvuXcMx67xRb2WKynrAR7WjtonaLWjGiAZbPD3D',
    },
  },
  lengthValue: {
    description: 'The length value of the resource.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/legaldocumentation/common/ResourceLength',
};
