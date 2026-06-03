export const APICall: Record<string, unknown> = {
  apiKeyId: {
    description:
      'Opaque or provider-defined identifier of the API credential, client registration, integration, or signing key used to\nsubmit the request. It should be stable enough for the provider and authorized auditors to trace, revoke, and review\nthe credential, but it need not reveal secret credential material.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    "Source specialization for a programmatic request submitted through an API credential, service integration, client\nregistration, signed request, webhook, or similar non-interactive interface. API Call identifies the submission\nchannel; it does not by itself say whether the actor was a principal, an agent, or another provider-defined actor.\n\nAPI Call is useful because many documents distinguish low-risk automation from high-risk principal actions. A bank\ntransfer document might allow API calls to add notes or upload receipts, while requiring an interactive browser\nsession for final authorization. A procurement workflow might allow an agent to request quotes through an API but not\nto commit funds. These decisions belong to Blue documents and processor policies, not to the Timeline Provider.\n\nThe provider's responsibility is to authenticate the API credential or client under its infrastructure rules,\nconfirm that the caller is allowed to append to the relevant timeline or submit the relevant event, and record the\nsource attribution accurately. The provider does not need to know what every Blue document will later do with the\nmessage.\n",
  name: 'API Call',
  type: {
    blueId: 'Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG',
  },
};
