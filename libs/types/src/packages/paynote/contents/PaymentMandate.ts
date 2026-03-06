export const PaymentMandate = {
  allowedPaymentCounterparties: {
    description:
      'Optional payment counterparty allowlist. Missing list means wildcard (any counterparty is allowed).\n',
    itemType: {
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyType: {
        description:
          'Allowed payment counterparty identifier type:\n- merchantId\n- customerId\n- accountNumber\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  allowedPayNotes: {
    description:
      'Optional linked PayNote allowlist. Used only when allowLinkedPayNote is true. Missing list means wildcard (any linked PayNote is allowed). Each entry must set exactly one selector: typeBlueId or documentBlueId.\n',
    itemType: {
      documentBlueId: {
        description:
          'Optional blue-id of an allowed concrete PayNote document. Mutually exclusive with typeBlueId.\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      typeBlueId: {
        description:
          'Optional blue-id of an allowed PayNote type. Mutually exclusive with documentBlueId.\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  allowLinkedPayNote: {
    description:
      'Whether this mandate allows linked PayNote startup after charge execution.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  amountCaptured: {
    description:
      'Running captured amount in minor currency units. Increased after successful capture.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  amountLimit: {
    description:
      'Maximum amount in minor currency units allowed by this mandate.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  amountReserved: {
    description:
      'Running reserved amount in minor currency units. Increased after successful reserve/authorize, decreased after release/capture.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeAttempts: {
    description:
      'Stateful map of authorizationId -> authorization state (authorization + settlement).',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      amountMinor: {
        description: 'Requested amount in minor currency units.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      authorizationReason: {
        description: 'Optional authorization rejection reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      authorizationRespondedAt: {
        description: 'Timestamp of authorization decision response.',
        type: {
          blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
        },
      },
      authorizationStatus: {
        description: 'Authorization decision status ("approved" | "rejected").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      authorizedAmountMinor: {
        description:
          'Authorized amount reserved against mandate capacity for this attempt.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      capturedDeltaMinor: {
        description: 'Captured delta applied for accepted settlement.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      chargeMode: {
        description:
          'Requested charge mode ("authorize_only" | "authorize_and_capture").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyType: {
        description:
          'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      currency: {
        description: 'Requested currency.',
        type: {
          blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
        },
      },
      holdId: {
        description: 'Optional hold id associated with settlement.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementId: {
        description:
          'Optional last applied settlement id for idempotency tracking.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementProcessingStatus: {
        description:
          'Mandate processing status for last settlement ("accepted" | "rejected").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementRequestStatus: {
        description:
          'Last settlement request status received from bank ("succeeded" | "failed").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      reservedDeltaMinor: {
        description: 'Reserved delta applied for accepted settlement.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      settled: {
        description: 'Whether mandate accepted settlement for this attempt.',
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
      },
      settlementReason: {
        description: 'Optional settlement rejection/info reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      settlementRespondedAt: {
        description: 'Timestamp of last settlement processing response.',
        type: {
          blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
        },
      },
      transactionId: {
        description: 'Optional transaction id associated with settlement.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
  contracts: {
    authorizeSpend: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Validate a charge attempt against mandate policy and reserve capacity.',
      request: {
        type: {
          blueId: '7EKvVzbT63C2taKWfLf9J2BiVL7BCL6Ld86tH8b9kmxF',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    authorizeSpendImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'authorizeSpend',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const documentCanonical = document.canonical('/');\nconst requestCanonical = eventCanonical\n  ? canon.at(eventCanonical, '/message/request')\n  : undefined;\n\nconst requestedAtNode = requestCanonical\n  ? canon.at(requestCanonical, '/requestedAt')\n  : undefined;\nconst requestedAtRaw = requestedAtNode ? canon.unwrap(requestedAtNode) : '';\nconst requestedAt = typeof requestedAtRaw === 'string' ? requestedAtRaw : '';\nconst nowIso =\n  requestedAt ||\n  (typeof event.timestamp === 'string' ? event.timestamp : '');\n\nconst normalizeTimestamp = function (value) {\n  if (typeof value !== 'string' || !value) {\n    return '';\n  }\n  let digits = '';\n  let index = 0;\n  while (index < value.length) {\n    const code = value.charCodeAt(index);\n    if (code >= 48 && code <= 57) {\n      digits += value.charAt(index);\n    }\n    index += 1;\n  }\n  if (digits.length < 14) {\n    return '';\n  }\n  return digits.slice(0, 14);\n};\n\nconst authorizationIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/authorizationId')\n  : undefined;\nconst authorizationIdRaw = authorizationIdNode\n  ? canon.unwrap(authorizationIdNode)\n  : '';\nconst authorizationId =\n  typeof authorizationIdRaw === 'string' ? authorizationIdRaw : '';\n\nconst amountMinorNode = requestCanonical\n  ? canon.at(requestCanonical, '/amountMinor')\n  : undefined;\nconst amountMinorRaw = amountMinorNode ? canon.unwrap(amountMinorNode) : 0;\nconst amountMinor = typeof amountMinorRaw === 'number' ? amountMinorRaw : 0;\n\nconst counterpartyTypeNode = requestCanonical\n  ? canon.at(requestCanonical, '/counterpartyType')\n  : undefined;\nconst counterpartyTypeRaw = counterpartyTypeNode\n  ? canon.unwrap(counterpartyTypeNode)\n  : '';\nconst counterpartyType =\n  typeof counterpartyTypeRaw === 'string' ? counterpartyTypeRaw : '';\n\nconst counterpartyIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/counterpartyId')\n  : undefined;\nconst counterpartyIdRaw = counterpartyIdNode\n  ? canon.unwrap(counterpartyIdNode)\n  : '';\nconst counterpartyId =\n  typeof counterpartyIdRaw === 'string' ? counterpartyIdRaw : '';\n\nconst requestedCurrencyNode = requestCanonical\n  ? canon.at(requestCanonical, '/currency')\n  : undefined;\nconst requestedCurrencyRaw = requestedCurrencyNode\n  ? canon.unwrap(requestedCurrencyNode)\n  : '';\nconst requestedCurrency =\n  typeof requestedCurrencyRaw === 'string' ? requestedCurrencyRaw : '';\n\nconst chargeAttemptsNode = canon.at(documentCanonical, '/chargeAttempts');\nconst chargeAttemptsRaw = chargeAttemptsNode\n  ? canon.unwrap(chargeAttemptsNode)\n  : {};\nconst chargeAttempts =\n  chargeAttemptsRaw &&\n  typeof chargeAttemptsRaw === 'object' &&\n  !Array.isArray(chargeAttemptsRaw)\n    ? chargeAttemptsRaw\n    : {};\nconst nextChargeAttempts = { ...chargeAttempts };\n\nconst existingAttemptRaw = authorizationId\n  ? chargeAttempts[authorizationId]\n  : undefined;\nconst existingAttempt =\n  existingAttemptRaw &&\n  typeof existingAttemptRaw === 'object' &&\n  !Array.isArray(existingAttemptRaw)\n    ? existingAttemptRaw\n    : null;\nconst existingDecision =\n  existingAttempt &&\n  typeof existingAttempt.authorizationStatus === 'string'\n    ? existingAttempt.authorizationStatus\n    : '';\nconst existingReason =\n  existingAttempt && typeof existingAttempt.authorizationReason === 'string'\n    ? existingAttempt.authorizationReason\n    : '';\n\nconst amountLimitNode = canon.at(documentCanonical, '/amountLimit');\nconst amountLimitRaw = amountLimitNode ? canon.unwrap(amountLimitNode) : 0;\nconst amountLimit = typeof amountLimitRaw === 'number' ? amountLimitRaw : 0;\n\nconst amountReservedNode = canon.at(documentCanonical, '/amountReserved');\nconst amountReservedRaw = amountReservedNode\n  ? canon.unwrap(amountReservedNode)\n  : 0;\nconst amountReserved =\n  typeof amountReservedRaw === 'number' ? amountReservedRaw : 0;\n\nconst amountCapturedNode = canon.at(documentCanonical, '/amountCaptured');\nconst amountCapturedRaw = amountCapturedNode\n  ? canon.unwrap(amountCapturedNode)\n  : 0;\nconst amountCaptured =\n  typeof amountCapturedRaw === 'number' ? amountCapturedRaw : 0;\n\nconst mandateCurrencyNode = canon.at(documentCanonical, '/currency');\nconst mandateCurrencyRaw = mandateCurrencyNode\n  ? canon.unwrap(mandateCurrencyNode)\n  : '';\nconst mandateCurrency =\n  typeof mandateCurrencyRaw === 'string' ? mandateCurrencyRaw : '';\n\nconst expiresAtNode = canon.at(documentCanonical, '/expiresAt');\nconst expiresAtRaw = expiresAtNode ? canon.unwrap(expiresAtNode) : '';\nconst expiresAt = typeof expiresAtRaw === 'string' ? expiresAtRaw : '';\n\nconst revokedAtNode = canon.at(documentCanonical, '/revokedAt');\nconst revokedAtRaw = revokedAtNode ? canon.unwrap(revokedAtNode) : '';\nconst revokedAt = typeof revokedAtRaw === 'string' ? revokedAtRaw : '';\n\nconst nowComparable = normalizeTimestamp(nowIso);\n\nconst allowedCounterpartiesNode = canon.at(\n  documentCanonical,\n  '/allowedPaymentCounterparties'\n);\nconst allowedCounterpartiesRaw = allowedCounterpartiesNode\n  ? canon.unwrap(allowedCounterpartiesNode)\n  : [];\nconst allowedCounterparties = Array.isArray(allowedCounterpartiesRaw)\n  ? allowedCounterpartiesRaw\n  : [];\nconst isCounterpartyAllowed =\n  allowedCounterparties.length === 0 ||\n  allowedCounterparties.some(function (item) {\n    const itemType =\n      item && typeof item.counterpartyType === 'string'\n        ? item.counterpartyType\n        : '';\n    const itemId =\n      item && typeof item.counterpartyId === 'string'\n        ? item.counterpartyId\n        : '';\n    return (\n      item &&\n      itemType === counterpartyType &&\n      itemId === counterpartyId\n    );\n  });\n\nlet status = 'rejected';\nlet reason = '';\nlet nextAmountReserved = amountReserved;\n\nif (existingDecision === 'approved' || existingDecision === 'rejected') {\n  status = existingDecision;\n  reason = existingDecision === 'rejected' ? existingReason : '';\n} else if (!authorizationId) {\n  reason = 'Missing authorizationId.';\n} else if (amountMinor <= 0) {\n  reason = 'Amount must be greater than zero.';\n} else if (!requestedCurrency || requestedCurrency !== mandateCurrency) {\n  reason = 'Currency does not match mandate currency.';\n} else if (revokedAt) {\n  reason = 'Mandate is revoked.';\n} else if (\n  expiresAt &&\n  normalizeTimestamp(expiresAt) &&\n  nowComparable &&\n  normalizeTimestamp(expiresAt) < nowComparable\n) {\n  reason = 'Mandate is expired.';\n} else if (!isCounterpartyAllowed) {\n  reason = 'Counterparty is not allowed by mandate.';\n} else if (amountReserved + amountCaptured + amountMinor > amountLimit) {\n  reason = 'Mandate amount limit exceeded.';\n} else {\n  status = 'approved';\n  nextAmountReserved = amountReserved + amountMinor;\n}\n\nif (authorizationId && !existingDecision) {\n  const chargeModeNode = requestCanonical\n    ? canon.at(requestCanonical, '/chargeMode')\n    : undefined;\n  const chargeModeRaw = chargeModeNode ? canon.unwrap(chargeModeNode) : '';\n  const chargeMode = typeof chargeModeRaw === 'string' ? chargeModeRaw : '';\n\n  nextChargeAttempts[authorizationId] = {\n    amountMinor,\n    currency: requestedCurrency,\n    counterpartyType,\n    counterpartyId,\n    chargeMode,\n    authorizationStatus: status,\n    authorizationReason: reason,\n    authorizationRespondedAt: nowIso,\n    authorizedAmountMinor: status === 'approved' ? amountMinor : 0,\n    settled: false,\n    lastSettlementRequestStatus: '',\n    lastSettlementProcessingStatus: '',\n    settlementReason: '',\n    settlementRespondedAt: '',\n    reservedDeltaMinor: 0,\n    capturedDeltaMinor: 0,\n    holdId: '',\n    transactionId: ''\n  };\n}\n\nconst remainingAmountMinor = Math.max(\n  0,\n  amountLimit - (nextAmountReserved + amountCaptured)\n);\n\nconst responseEvent = {\n  type: 'PayNote/Payment Mandate Spend Authorization Responded',\n  authorizationId,\n  status,\n  remainingAmountMinor,\n  respondedAt: nowIso\n};\n\nif (reason) {\n  responseEvent.reason = reason;\n}\n\nreturn {\n  nextChargeAttempts: nextChargeAttempts,\n  nextAmountReserved: nextAmountReserved,\n  events: [responseEvent]\n};\n",
            },
            name: 'Decide Spend Authorization',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/chargeAttempts',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Decide Spend Authorization'].nextChargeAttempts}",
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/amountReserved',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Decide Spend Authorization'].nextAmountReserved}",
                  },
                },
              ],
            },
            name: 'Persist Authorization Decision',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    granteeChannel: {
      description:
        'Grantee timeline channel (party allowed to use the mandate).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    granterChannel: {
      description: 'Granting party timeline channel.',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    guarantorChannel: {
      description:
        'Bank/admin channel executing mandate checks and settlement updates.',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    initialize: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/chargeAttempts',
                  },
                  val: {},
                },
              ],
            },
            name: 'Initialize mandate runtime state',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
      },
    },
    initLifecycleChannel: {
      event: {
        type: {
          blueId: 'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2',
        },
      },
      type: {
        blueId: 'H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr',
      },
    },
    settleSpend: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Apply final reserve/capture deltas for a previously authorized charge attempt.',
      request: {
        type: {
          blueId: '6aPqmL9AQV31CCV576ZmEcUgysbdbQAfAig9J5VYeR6v',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    settleSpendImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'settleSpend',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const documentCanonical = document.canonical('/');\nconst requestCanonical = eventCanonical\n  ? canon.at(eventCanonical, '/message/request')\n  : undefined;\n\nconst settledAtNode = requestCanonical\n  ? canon.at(requestCanonical, '/settledAt')\n  : undefined;\nconst settledAtRaw = settledAtNode ? canon.unwrap(settledAtNode) : '';\nconst settledAt = typeof settledAtRaw === 'string' ? settledAtRaw : '';\nconst nowIso =\n  settledAt || (typeof event.timestamp === 'string' ? event.timestamp : '');\n\nconst authorizationIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/authorizationId')\n  : undefined;\nconst authorizationIdRaw = authorizationIdNode\n  ? canon.unwrap(authorizationIdNode)\n  : '';\nconst authorizationId =\n  typeof authorizationIdRaw === 'string' ? authorizationIdRaw : '';\n\nconst settlementStatusNode = requestCanonical\n  ? canon.at(requestCanonical, '/status')\n  : undefined;\nconst settlementStatusRaw = settlementStatusNode\n  ? canon.unwrap(settlementStatusNode)\n  : '';\nconst settlementStatus =\n  typeof settlementStatusRaw === 'string' ? settlementStatusRaw : '';\n\nconst reservedDeltaNode = requestCanonical\n  ? canon.at(requestCanonical, '/reservedDeltaMinor')\n  : undefined;\nconst reservedDeltaRaw = reservedDeltaNode ? canon.unwrap(reservedDeltaNode) : 0;\nconst reservedDeltaMinor =\n  typeof reservedDeltaRaw === 'number' ? reservedDeltaRaw : 0;\n\nconst capturedDeltaNode = requestCanonical\n  ? canon.at(requestCanonical, '/capturedDeltaMinor')\n  : undefined;\nconst capturedDeltaRaw = capturedDeltaNode ? canon.unwrap(capturedDeltaNode) : 0;\nconst capturedDeltaMinor =\n  typeof capturedDeltaRaw === 'number' ? capturedDeltaRaw : 0;\n\nconst amountLimitNode = canon.at(documentCanonical, '/amountLimit');\nconst amountLimitRaw = amountLimitNode ? canon.unwrap(amountLimitNode) : 0;\nconst amountLimit = typeof amountLimitRaw === 'number' ? amountLimitRaw : 0;\n\nconst amountReservedNode = canon.at(documentCanonical, '/amountReserved');\nconst amountReservedRaw = amountReservedNode\n  ? canon.unwrap(amountReservedNode)\n  : 0;\nconst amountReserved =\n  typeof amountReservedRaw === 'number' ? amountReservedRaw : 0;\n\nconst amountCapturedNode = canon.at(documentCanonical, '/amountCaptured');\nconst amountCapturedRaw = amountCapturedNode\n  ? canon.unwrap(amountCapturedNode)\n  : 0;\nconst amountCaptured =\n  typeof amountCapturedRaw === 'number' ? amountCapturedRaw : 0;\n\nconst chargeAttemptsNode = canon.at(documentCanonical, '/chargeAttempts');\nconst chargeAttemptsRaw = chargeAttemptsNode\n  ? canon.unwrap(chargeAttemptsNode)\n  : {};\nconst chargeAttempts =\n  chargeAttemptsRaw &&\n  typeof chargeAttemptsRaw === 'object' &&\n  !Array.isArray(chargeAttemptsRaw)\n    ? chargeAttemptsRaw\n    : {};\nconst nextChargeAttempts = { ...chargeAttempts };\n\nconst existingAttemptRaw = authorizationId\n  ? chargeAttempts[authorizationId]\n  : undefined;\nconst existingAttempt =\n  existingAttemptRaw &&\n  typeof existingAttemptRaw === 'object' &&\n  !Array.isArray(existingAttemptRaw)\n    ? existingAttemptRaw\n    : null;\n\nconst alreadySettled = !!existingAttempt && existingAttempt.settled === true;\nconst approved =\n  !!existingAttempt &&\n  typeof existingAttempt.authorizationStatus === 'string' &&\n  existingAttempt.authorizationStatus === 'approved';\nconst authorizedAmount =\n  existingAttempt && typeof existingAttempt.authorizedAmountMinor === 'number'\n    ? existingAttempt.authorizedAmountMinor\n    : 0;\n\nconst holdIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/holdId')\n  : undefined;\nconst holdIdRaw = holdIdNode ? canon.unwrap(holdIdNode) : '';\nconst holdId = typeof holdIdRaw === 'string' ? holdIdRaw : '';\n\nconst transactionIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/transactionId')\n  : undefined;\nconst transactionIdRaw = transactionIdNode\n  ? canon.unwrap(transactionIdNode)\n  : '';\nconst transactionId =\n  typeof transactionIdRaw === 'string' ? transactionIdRaw : '';\n\nconst settlementIdNode = requestCanonical\n  ? canon.at(requestCanonical, '/settlementId')\n  : undefined;\nconst settlementIdRaw = settlementIdNode\n  ? canon.unwrap(settlementIdNode)\n  : '';\nconst settlementId =\n  typeof settlementIdRaw === 'string' ? settlementIdRaw : '';\n\nconst requestReasonNode = requestCanonical\n  ? canon.at(requestCanonical, '/reason')\n  : undefined;\nconst requestReasonRaw = requestReasonNode\n  ? canon.unwrap(requestReasonNode)\n  : '';\nconst requestReason =\n  typeof requestReasonRaw === 'string' ? requestReasonRaw : '';\n\nlet status = 'rejected';\nlet reason = '';\nlet nextAmountReserved = amountReserved;\nlet nextAmountCaptured = amountCaptured;\nlet nextAttempt = existingAttempt ? { ...existingAttempt } : null;\n\nif (!authorizationId) {\n  reason = 'Missing authorizationId.';\n} else if (alreadySettled) {\n  status = 'accepted';\n  reason = 'Authorization already settled.';\n} else if (!approved) {\n  reason = 'Authorization is not approved.';\n} else if (\n  settlementStatus !== 'succeeded' &&\n  settlementStatus !== 'failed'\n) {\n  reason = 'Unsupported settlement status.';\n} else if (capturedDeltaMinor < 0) {\n  reason = 'capturedDeltaMinor cannot be negative.';\n} else if (\n  settlementStatus === 'failed' &&\n  capturedDeltaMinor !== 0\n) {\n  reason = 'capturedDeltaMinor must be 0 for failed settlement.';\n} else if (capturedDeltaMinor > authorizedAmount) {\n  reason = 'capturedDeltaMinor exceeds authorized amount.';\n} else {\n  const candidateAmountReserved = amountReserved + reservedDeltaMinor;\n  const candidateAmountCaptured = amountCaptured + capturedDeltaMinor;\n  const candidateUsed = candidateAmountReserved + candidateAmountCaptured;\n\n  if (candidateAmountReserved < 0) {\n    reason = 'Settlement would make amountReserved negative.';\n  } else if (candidateAmountCaptured < 0) {\n    reason = 'Settlement would make amountCaptured negative.';\n  } else if (candidateUsed > amountLimit) {\n    reason = 'Settlement would exceed amountLimit.';\n  } else {\n    status = 'accepted';\n    nextAmountReserved = candidateAmountReserved;\n    nextAmountCaptured = candidateAmountCaptured;\n    nextAttempt = { ...existingAttempt };\n    nextAttempt.settled = true;\n    nextAttempt.lastSettlementRequestStatus = settlementStatus;\n    nextAttempt.lastSettlementProcessingStatus = 'accepted';\n    nextAttempt.settlementReason = requestReason;\n    nextAttempt.settlementRespondedAt = nowIso;\n    nextAttempt.reservedDeltaMinor = reservedDeltaMinor;\n    nextAttempt.capturedDeltaMinor = capturedDeltaMinor;\n    nextAttempt.holdId = holdId;\n    nextAttempt.transactionId = transactionId;\n    nextAttempt.lastSettlementId = settlementId;\n    nextChargeAttempts[authorizationId] = nextAttempt;\n  }\n}\n\nif (nextAttempt && status === 'rejected') {\n  nextAttempt = { ...nextAttempt };\n  nextAttempt.lastSettlementRequestStatus = settlementStatus;\n  nextAttempt.lastSettlementProcessingStatus = 'rejected';\n  nextAttempt.settlementReason = reason;\n  nextAttempt.settlementRespondedAt = nowIso;\n  nextAttempt.lastSettlementId = settlementId;\n  nextChargeAttempts[authorizationId] = nextAttempt;\n}\n\nconst responseEvent = {\n  type: 'PayNote/Payment Mandate Spend Settlement Responded',\n  authorizationId,\n  settlementId,\n  status,\n  amountReserved: nextAmountReserved,\n  amountCaptured: nextAmountCaptured,\n  respondedAt: nowIso\n};\n\nif (reason) {\n  responseEvent.reason = reason;\n}\n\nreturn {\n  nextChargeAttempts: nextChargeAttempts,\n  nextAmountReserved: nextAmountReserved,\n  nextAmountCaptured: nextAmountCaptured,\n  events: [responseEvent]\n};\n",
            },
            name: 'Validate and Apply Settlement',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/chargeAttempts',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Validate and Apply Settlement'].nextChargeAttempts}",
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/amountReserved',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Validate and Apply Settlement'].nextAmountReserved}",
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/amountCaptured',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Validate and Apply Settlement'].nextAmountCaptured}",
                  },
                },
              ],
            },
            name: 'Persist Settlement',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
  },
  currency: {
    description: 'Currency code used for amountLimit validation.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Payment mandate authorizing a grantee to execute payment requests on behalf of a granter, under explicit limits, with deterministic spend tracking and optional linked PayNote bootstrap rules.\n',
  expiresAt: {
    description: 'Optional mandate expiry timestamp.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  granteeId: {
    description: 'Identifier interpreted according to granteeType.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granteeType: {
    description:
      'Party allowed to invoke this mandate:\n- documentId\n- merchantId\n- customerId\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterId: {
    description:
      'Identifier of the granting party:\n- merchantId when granterType is merchant\n- customerId (bank user id) when granterType is customer\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterType: {
    description:
      'Party granting authority to use funds:\n- merchant\n- customer\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Mandate',
  revokedAt: {
    description:
      'Optional revocation timestamp. When set, mandate is inactive.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  sourceAccount: {
    description:
      'Funds source to use when this mandate executes: - root (uses root account context; for merchant this maps to active credit line) - specific account number\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
