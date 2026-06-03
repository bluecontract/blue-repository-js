export const CdmObservableAssetCreditNotation: Record<string, unknown> = {
  agency: {
    description:
      'Specifies The credit agency to which the other variables (notation, scale, debt type) refer to.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'D1H3C3xAMJv2XQNBYfethSUKDH7kngUkefwbzLwVLW1i',
    },
  },
  creditWatch: {
    description:
      'Indicates the potential direction of a short-term or long-term rating. It focuses on identifiable events and short-term trends that cause ratings to be placed under special surveillance.\n',
    type: {
      blueId: 'HaWzE4gbbhGKXJnQA29vkDyfHSkhDsje8H82PYwV2Phr',
    },
  },
  debt: {
    description:
      'Specifies the credit rating debt type (e.g. long term, high yield, deposits, ...) associated with the credit rating notation and scale.\n',
    type: {
      blueId: 'H8A5EpXYgdKnD1FhyTni2vHEnBp15QF3Y1Hk9y72CfzJ',
    },
  },
  description:
    'Represents a class to specify the credit notation as the combination of agency, notation, scale and debt type qualifications.\n',
  name: 'cdm/observable/asset/CreditNotation',
  notation: {
    description:
      "Specifies The credit rating notation. As it varies among credit rating agencies, FpML doesn't specify a default scheme.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  outlook: {
    description:
      'Assesses the potential direction of a long-term credit rating over the intermediate term, which is generally up to two years for investment grade and generally up to one year for speculative grade.\n',
    type: {
      blueId: '8STyBvSNBUVRcziJ5ApHvpPRYRvyJTGTsrM6RAFpGJE',
    },
  },
  scale: {
    description:
      "Specifies the credit rating scale, with a typical distinction between short term, long term. FpML doesn't specify a default scheme, which is hence not specified as an enumeration as part of the CDM.\n",
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
};
