export const CdmProductTemplateExerciseNotice: Record<string, unknown> = {
  businessCenter: {
    description:
      'Specifies the location where the exercise must be reported, e.g. where the exercise notice receiver is based.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EtUp3RuaDWzJnGNfgdjWD82gBrcgUyd6KM7cMfBajMzy',
    },
  },
  description:
    'Defines to whom and where notice of execution should be given. The exerciseNoticeGiver refers to one or both of the principal parties of the trade. If present the exerciseNoticeReceiver refers to a party, other than the principal party, to whom notice should be given.\n',
  exerciseNoticeGiver: {
    description:
      'Specifies the principal party of the trade that has the right to exercise.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'B1vhPUsx48HVhqzgCrbzrCdTrzUxEiaHYjyp5gsErLd9',
    },
  },
  exerciseNoticeReceiver: {
    description:
      'Specifies the party to which notice of exercise should be given, e.g. by the buyer of the option. Although in many cases it is the buyer of the option who sends the exercise notice to the seller of the option, this component is reused, e.g. in case of OptionEarlyTermination, either or both parties have the right to exercise.\n',
    type: {
      blueId: 'C2Ec7JF7c6QV6kD3Wb7Mtfg9NJ7aemu5KqHaafpZuEvN',
    },
  },
  name: 'cdm/product/template/ExerciseNotice',
};
