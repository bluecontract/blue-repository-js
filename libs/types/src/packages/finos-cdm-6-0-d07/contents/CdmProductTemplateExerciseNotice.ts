export const CdmProductTemplateExerciseNotice = {
  businessCenter: {
    description:
      'Specifies the location where the exercise must be reported, e.g. where the exercise notice receiver is based.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2Y1JVjnbbb22zrKVYtvVRfAkqMEsujAWoUHytGJxuprQ',
    },
  },
  description:
    'Defines to whom and where notice of execution should be given. The exerciseNoticeGiver refers to one or both of the principal parties of the trade. If present the exerciseNoticeReceiver refers to a party, other than the principal party, to whom notice should be given.\n',
  exerciseNoticeGiver: {
    description:
      'Specifies the principal party of the trade that has the right to exercise.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '12Vk9Vr4K8mMX1W8Wzr5LhciVWUSW5eLT6swkA7rmYQF',
    },
  },
  exerciseNoticeReceiver: {
    description:
      'Specifies the party to which notice of exercise should be given, e.g. by the buyer of the option. Although in many cases it is the buyer of the option who sends the exercise notice to the seller of the option, this component is reused, e.g. in case of OptionEarlyTermination, either or both parties have the right to exercise.\n',
    type: {
      blueId: '6Z3jsP3QVXumTdQMGZVcCDRNn3n62xjfZLNEHaZeDWmb',
    },
  },
  name: 'cdm/product/template/ExerciseNotice',
} as const;
