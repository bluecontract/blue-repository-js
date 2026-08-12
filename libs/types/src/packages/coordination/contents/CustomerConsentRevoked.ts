export const CustomerConsentRevoked: Record<string, unknown> = {
  description:
    'Event indicating that a customer or participant revoked a previously granted consent, authorization, or permission.\nWorkflows should treat this as a high-priority signal and re-check any operation that depends on the revoked consent.\n\nThe event records an optional reason and timestamp. Actor/source attribution should be supplied by the enclosing\nTimeline Entry or event source so that processors can determine whether the revocation came from an authorized\nprincipal or an allowed delegate.\n',
  name: 'Customer Consent Revoked',
  reason: {
    description:
      'Optional human-readable or structured reason for revocation.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  revokedAt: {
    description:
      'Timestamp when revocation was recorded by the source or provider.\n',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
