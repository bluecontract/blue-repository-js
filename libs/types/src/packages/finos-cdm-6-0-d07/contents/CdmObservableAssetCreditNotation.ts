export const CdmObservableAssetCreditNotation = {
  agency: {
    description:
      'Specifies The credit agency to which the other variables (notation, scale, debt type) refer to.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BFNEhsfLPvMSawMY6Q3SUpNzPsjYgQEKYmUQrD92UE4r',
    },
  },
  creditWatch: {
    description:
      'Indicates the potential direction of a short-term or long-term rating. It focuses on identifiable events and short-term trends that cause ratings to be placed under special surveillance.\n',
    type: {
      blueId: 'BgVnixZS6aAn2Xvg2wyoxaFLhL4nCdoLXTihMhmw4p8R',
    },
  },
  debt: {
    description:
      'Specifies the credit rating debt type (e.g. long term, high yield, deposits, ...) associated with the credit rating notation and scale.\n',
    type: {
      blueId: 'DqC2oNjEyRAjmb6kubvmJ5ppLVuekBouV87Zjnvc289g',
    },
  },
  description:
    'Represents a class to specify the credit notation as the combination of agency, notation, scale and debt type qualifications.\n',
  name: 'cdm/observable/asset/CreditNotation',
  notation: {
    description:
      "Specifies The credit rating notation. As it varies among credit rating agencies, FpML doesn't specify a default scheme.\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  outlook: {
    description:
      'Assesses the potential direction of a long-term credit rating over the intermediate term, which is generally up to two years for investment grade and generally up to one year for speculative grade.\n',
    type: {
      blueId: 'BnWttcLPfpaqYUTyq7j6NHVPGJv1W1SJxLuyCksLQ9xE',
    },
  },
  scale: {
    description:
      "Specifies the credit rating scale, with a typical distinction between short term, long term. FpML doesn't specify a default scheme, which is hence not specified as an enumeration as part of the CDM.\n",
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
} as const;
