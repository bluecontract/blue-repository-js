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
      'Stateful map of chargeAttemptId -> attempt state (authorization + settlement).',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'JADRqXZ7UWNDqPt9Zhnn6831Nz2X5yeSuyew4hu6ciVq',
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
          blueId: '4STBHLJjxjCZVgeW2ScFfmsx8Vm16FenEbaNMyL8ZJUT',
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
                "const request =\n  event && event.message && event.message.request\n    ? event.message.request\n    : {};\n\nconst unwrapNodeValue = function (value) {\n  if (\n    value &&\n    typeof value === 'object' &&\n    Object.prototype.hasOwnProperty.call(value, 'value')\n  ) {\n    return value.value;\n  }\n  return value;\n};\n\nconst toText = function (value) {\n  const unwrapped = unwrapNodeValue(value);\n  return typeof unwrapped === 'string' ? unwrapped : '';\n};\n\nconst toTimestampText = function (value) {\n  const unwrapped = unwrapNodeValue(value);\n  if (typeof unwrapped === 'string') {\n    return unwrapped;\n  }\n  if (typeof unwrapped === 'number') {\n    return String(unwrapped);\n  }\n  return '';\n};\n\nconst nowIso =\n  toText(request.requestedAt) ||\n  toTimestampText(event && event.timestamp ? event.timestamp : '');\n\nconst normalizeTimestamp = function (value) {\n  if (typeof value !== 'string' || !value) {\n    return '';\n  }\n  let digits = '';\n  let index = 0;\n  while (index < value.length) {\n    const code = value.charCodeAt(index);\n    if (code >= 48 && code <= 57) {\n      digits += value.charAt(index);\n    }\n    index += 1;\n  }\n  if (digits.length < 14) {\n    return '';\n  }\n  return digits.slice(0, 14);\n};\n\nconst toInteger = function (value, fallback) {\n  const safeFallback =\n    typeof fallback === 'number' && Number.isFinite(fallback)\n      ? Math.trunc(fallback)\n      : 0;\n  const unwrapped = unwrapNodeValue(value);\n  if (typeof unwrapped === 'number' && Number.isFinite(unwrapped)) {\n    return Math.trunc(unwrapped);\n  }\n  if (typeof unwrapped !== 'string' || !unwrapped) {\n    return safeFallback;\n  }\n  const parsed = Number(unwrapped);\n  return Number.isFinite(parsed) ? Math.trunc(parsed) : safeFallback;\n};\n\nconst cloneObject = function (value) {\n  const source = value && typeof value === 'object' ? value : {};\n  const clone = {};\n  Object.keys(source).forEach(function (key) {\n    clone[key] = source[key];\n  });\n  return clone;\n};\n\nconst chargeAttemptId = toText(request.chargeAttemptId);\nconst amountMinor = toInteger(request.amountMinor, 0);\nconst counterpartyType = toText(request.counterpartyType);\nconst counterpartyId = toText(request.counterpartyId);\nconst requestedCurrency = toText(request.currency);\n\nconst chargeAttempts = document.canonical('/chargeAttempts') || {};\nconst nextChargeAttempts = cloneObject(chargeAttempts);\n\nconst existingAttempt =\n  chargeAttemptId &&\n  chargeAttempts[chargeAttemptId] &&\n  typeof chargeAttempts[chargeAttemptId] === 'object'\n    ? chargeAttempts[chargeAttemptId]\n    : null;\nconst existingDecision =\n  existingAttempt ? toText(existingAttempt.authorizationStatus) : '';\nconst existingReason =\n  existingAttempt ? toText(existingAttempt.authorizationReason) : '';\n\nconst amountLimit = toInteger(document('/amountLimit'), 0);\nconst amountReserved = toInteger(document('/amountReserved'), 0);\nconst amountCaptured = toInteger(document('/amountCaptured'), 0);\nconst mandateCurrency = toText(document('/currency'));\nconst expiresAt = toText(document('/expiresAt'));\nconst revokedAt = toText(document('/revokedAt'));\nconst nowComparable = normalizeTimestamp(nowIso);\n\nconst allowedCounterparties = document.canonical('/allowedPaymentCounterparties');\nconst isCounterpartyAllowed =\n  !Array.isArray(allowedCounterparties) ||\n  allowedCounterparties.length === 0 ||\n  allowedCounterparties.some(function (item) {\n    return (\n      item &&\n      toText(item.counterpartyType) === counterpartyType &&\n      toText(item.counterpartyId) === counterpartyId\n    );\n  });\n\nlet status = 'rejected';\nlet reason = '';\nlet nextAmountReserved = amountReserved;\n\nif (existingDecision === 'approved' || existingDecision === 'rejected') {\n  status = existingDecision;\n  reason = existingDecision === 'rejected' ? existingReason : '';\n} else if (!chargeAttemptId) {\n  reason = 'Missing chargeAttemptId.';\n} else if (amountMinor <= 0) {\n  reason = 'Amount must be greater than zero.';\n} else if (!requestedCurrency || requestedCurrency !== mandateCurrency) {\n  reason = 'Currency does not match mandate currency.';\n} else if (revokedAt) {\n  reason = 'Mandate is revoked.';\n} else if (\n  expiresAt &&\n  normalizeTimestamp(expiresAt) &&\n  nowComparable &&\n  normalizeTimestamp(expiresAt) < nowComparable\n) {\n  reason = 'Mandate is expired.';\n} else if (!isCounterpartyAllowed) {\n  reason = 'Counterparty is not allowed by mandate.';\n} else if (amountReserved + amountCaptured + amountMinor > amountLimit) {\n  reason = 'Mandate amount limit exceeded.';\n} else {\n  status = 'approved';\n  nextAmountReserved = amountReserved + amountMinor;\n}\n\nif (chargeAttemptId && !existingDecision) {\n  nextChargeAttempts[chargeAttemptId] = {\n    amountMinor,\n    currency: requestedCurrency,\n    counterpartyType,\n    counterpartyId,\n    chargeMode:\n      toText(request.chargeMode),\n    authorizationStatus: status,\n    authorizationReason: reason,\n    authorizationRespondedAt: nowIso,\n    authorizedAmountMinor: status === 'approved' ? amountMinor : 0,\n    settled: false,\n    lastSettlementRequestStatus: '',\n    lastSettlementProcessingStatus: '',\n    settlementReason: '',\n    settlementRespondedAt: '',\n    reservedDeltaMinor: 0,\n    capturedDeltaMinor: 0,\n    holdId: '',\n    transactionId: ''\n  };\n}\n\nconst remainingAmountMinor = Math.max(\n  0,\n  amountLimit - (nextAmountReserved + amountCaptured)\n);\n\nconst responseEvent = {\n  type: 'PayNote/Payment Mandate Spend Authorization Responded',\n  chargeAttemptId,\n  status,\n  remainingAmountMinor,\n  respondedAt: nowIso\n};\n\nif (reason) {\n  responseEvent.reason = reason;\n}\n\nreturn {\n  nextChargeAttempts: nextChargeAttempts,\n  nextAmountReserved: nextAmountReserved,\n  events: [responseEvent]\n};\n",
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
          blueId: '3TW3tRAQdYoMTFeeqmnWLR9JFibTVaJuiRJfJ3ggeVTJ',
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
                "const request =\n  event && event.message && event.message.request\n    ? event.message.request\n    : {};\n\nconst unwrapNodeValue = function (value) {\n  if (\n    value &&\n    typeof value === 'object' &&\n    Object.prototype.hasOwnProperty.call(value, 'value')\n  ) {\n    return value.value;\n  }\n  return value;\n};\n\nconst toText = function (value) {\n  const unwrapped = unwrapNodeValue(value);\n  return typeof unwrapped === 'string' ? unwrapped : '';\n};\n\nconst toTimestampText = function (value) {\n  const unwrapped = unwrapNodeValue(value);\n  if (typeof unwrapped === 'string') {\n    return unwrapped;\n  }\n  if (typeof unwrapped === 'number') {\n    return String(unwrapped);\n  }\n  return '';\n};\n\nconst nowIso =\n  toText(request.settledAt) ||\n  toTimestampText(event && event.timestamp ? event.timestamp : '');\n\nconst toInteger = function (value, fallback) {\n  const safeFallback =\n    typeof fallback === 'number' && Number.isFinite(fallback)\n      ? Math.trunc(fallback)\n      : 0;\n  const unwrapped = unwrapNodeValue(value);\n  if (typeof unwrapped === 'number' && Number.isFinite(unwrapped)) {\n    return Math.trunc(unwrapped);\n  }\n  if (typeof unwrapped !== 'string' || !unwrapped) {\n    return safeFallback;\n  }\n  const parsed = Number(unwrapped);\n  return Number.isFinite(parsed) ? Math.trunc(parsed) : safeFallback;\n};\n\nconst cloneObject = function (value) {\n  const source = value && typeof value === 'object' ? value : {};\n  const clone = {};\n  Object.keys(source).forEach(function (key) {\n    clone[key] = source[key];\n  });\n  return clone;\n};\n\nconst chargeAttemptId = toText(request.chargeAttemptId);\nconst settlementStatus = toText(request.status);\nconst reservedDeltaMinor = toInteger(request.reservedDeltaMinor, 0);\nconst capturedDeltaMinor = toInteger(request.capturedDeltaMinor, 0);\n\nconst amountLimit = toInteger(document('/amountLimit'), 0);\nconst amountReserved = toInteger(document('/amountReserved'), 0);\nconst amountCaptured = toInteger(document('/amountCaptured'), 0);\n\nconst chargeAttempts = document.canonical('/chargeAttempts') || {};\nconst nextChargeAttempts = cloneObject(chargeAttempts);\nconst existingAttempt =\n  chargeAttemptId &&\n  chargeAttempts[chargeAttemptId] &&\n  typeof chargeAttempts[chargeAttemptId] === 'object'\n    ? chargeAttempts[chargeAttemptId]\n    : null;\n\nconst alreadySettled = !!existingAttempt && existingAttempt.settled === true;\nconst approved =\n  !!existingAttempt && toText(existingAttempt.authorizationStatus) === 'approved';\nconst authorizedAmount = toInteger(\n  existingAttempt ? existingAttempt.authorizedAmountMinor : 0,\n  0\n);\n\nconst holdId = toText(request.holdId);\nconst transactionId = toText(request.transactionId);\nconst requestReason = toText(request.reason);\n\nlet status = 'rejected';\nlet reason = '';\nlet nextAmountReserved = amountReserved;\nlet nextAmountCaptured = amountCaptured;\nlet nextAttempt = existingAttempt ? cloneObject(existingAttempt) : null;\n\nif (!chargeAttemptId) {\n  reason = 'Missing chargeAttemptId.';\n} else if (alreadySettled) {\n  status = 'accepted';\n  reason = 'Charge attempt already settled.';\n} else if (!approved) {\n  reason = 'Charge attempt is not approved.';\n} else if (\n  settlementStatus !== 'succeeded' &&\n  settlementStatus !== 'failed'\n) {\n  reason = 'Unsupported settlement status.';\n} else if (capturedDeltaMinor < 0) {\n  reason = 'capturedDeltaMinor cannot be negative.';\n} else if (\n  settlementStatus === 'failed' &&\n  capturedDeltaMinor !== 0\n) {\n  reason = 'capturedDeltaMinor must be 0 for failed settlement.';\n} else if (capturedDeltaMinor > authorizedAmount) {\n  reason = 'capturedDeltaMinor exceeds authorized amount.';\n} else {\n  const candidateAmountReserved = amountReserved + reservedDeltaMinor;\n  const candidateAmountCaptured = amountCaptured + capturedDeltaMinor;\n  const candidateUsed = candidateAmountReserved + candidateAmountCaptured;\n\n  if (candidateAmountReserved < 0) {\n    reason = 'Settlement would make amountReserved negative.';\n  } else if (candidateAmountCaptured < 0) {\n    reason = 'Settlement would make amountCaptured negative.';\n  } else if (candidateUsed > amountLimit) {\n    reason = 'Settlement would exceed amountLimit.';\n  } else {\n    status = 'accepted';\n    nextAmountReserved = candidateAmountReserved;\n    nextAmountCaptured = candidateAmountCaptured;\n    nextAttempt = cloneObject(existingAttempt);\n    nextAttempt.settled = true;\n    nextAttempt.lastSettlementRequestStatus = settlementStatus;\n    nextAttempt.lastSettlementProcessingStatus = 'accepted';\n    nextAttempt.settlementReason = requestReason;\n    nextAttempt.settlementRespondedAt = nowIso;\n    nextAttempt.reservedDeltaMinor = reservedDeltaMinor;\n    nextAttempt.capturedDeltaMinor = capturedDeltaMinor;\n    nextAttempt.holdId = holdId;\n    nextAttempt.transactionId = transactionId;\n    nextChargeAttempts[chargeAttemptId] = nextAttempt;\n  }\n}\n\nif (nextAttempt && status === 'rejected') {\n  nextAttempt = cloneObject(nextAttempt);\n  nextAttempt.lastSettlementRequestStatus = settlementStatus;\n  nextAttempt.lastSettlementProcessingStatus = 'rejected';\n  nextAttempt.settlementReason = reason;\n  nextAttempt.settlementRespondedAt = nowIso;\n  nextChargeAttempts[chargeAttemptId] = nextAttempt;\n}\n\nconst responseEvent = {\n  type: 'PayNote/Payment Mandate Spend Settlement Responded',\n  chargeAttemptId,\n  status,\n  amountReserved: nextAmountReserved,\n  amountCaptured: nextAmountCaptured,\n  respondedAt: nowIso\n};\n\nif (reason) {\n  responseEvent.reason = reason;\n}\n\nreturn {\n  nextChargeAttempts: nextChargeAttempts,\n  nextAmountReserved: nextAmountReserved,\n  nextAmountCaptured: nextAmountCaptured,\n  events: [responseEvent]\n};\n",
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
