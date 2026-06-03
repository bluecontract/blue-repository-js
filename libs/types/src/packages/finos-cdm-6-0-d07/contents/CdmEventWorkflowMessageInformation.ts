export const CdmEventWorkflowMessageInformation: Record<string, unknown> = {
  copyTo: {
    description:
      'A unique identifier (within the specified coding scheme) giving the details of some party to whom a copy of this message will be sent for reference.\n',
    itemType: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'This class corresponds to the components of the FpML MessageHeader.model.',
  messageId: {
    description: 'A unique identifier assigned to the message.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  name: 'cdm/event/workflow/MessageInformation',
  sentBy: {
    description: 'The identifier for the originator of a message instance.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  sentTo: {
    description:
      'The identifier(s) for the recipient(s) of a message instance.',
    itemType: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
