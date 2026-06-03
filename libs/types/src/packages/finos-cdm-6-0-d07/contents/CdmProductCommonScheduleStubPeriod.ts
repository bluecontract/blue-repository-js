export const CdmProductCommonScheduleStubPeriod: Record<string, unknown> = {
  calculationPeriodDatesReference: {
    description:
      'A pointer style reference to the associated calculation period dates component defined elsewhere in the document.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5kML8V9qeDP2N3N3L173vbHKEbT1tjwLQ89bXgwhB2jf',
    },
  },
  description:
    'A class defining how the initial or final stub calculation period amounts is calculated. For example, the rate to be applied to the initial or final stub calculation period may be the linear interpolation of two different tenors for the floating rate index specified in the calculation period amount component, e.g. A two month stub period may used the linear interpolation of a one month and three month floating rate. The different rate tenors would be specified in this component. Note that a maximum of two rate tenors can be specified. If a stub period uses a single index tenor and this is the same as that specified in the calculation period amount component then the initial stub or final stub component, as the case may be, must not be included.\n',
  finalStub: {
    description:
      'Specifies how the final stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.\n',
    type: {
      blueId: '9f7SedHY7MLNrDKoAPQVcQd1y4QsJTXjSzv9xZELhYij',
    },
  },
  initialStub: {
    description:
      'Specifies how the initial stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.\n',
    type: {
      blueId: '9f7SedHY7MLNrDKoAPQVcQd1y4QsJTXjSzv9xZELhYij',
    },
  },
  name: 'cdm/product/common/schedule/StubPeriod',
};
