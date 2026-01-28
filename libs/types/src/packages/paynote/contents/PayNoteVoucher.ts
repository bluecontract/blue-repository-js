export const PayNoteVoucher = {
  activatedAt: {
    description:
      'Timestamp (microseconds since epoch) when the voucher was activated.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  contracts: {
    activateVoucher: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payeeChannel',
      },
      description:
        'Client grants consent for the bank to monitor card transactions at the target merchant and report them into this document, then activates the voucher.',
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    activateVoucherImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'activateVoucher',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\nconst currentActivatedAt = document('/activatedAt');\nconst alreadyActivated = currentActivatedAt > 0;\nconst targetMerchantId = document('/voucher/targetMerchantId') || '';\nconst limitMinor = document('/voucher/limitMinor');\nconst events = [];\nconst changeset = [];\n\nif (!alreadyActivated) {\n  changeset.push({ op: 'replace', path: '/activatedAt', val: timestamp });\n  changeset.push({\n    op: 'replace',\n    path: '/status',\n    val: { type: 'Conversation/Status In Progress' }\n  });\n\n  if (Number.isFinite(limitMinor) && limitMinor >= 0) {\n    changeset.push({ op: 'replace', path: '/paidOutAmountMinor', val: 0 });\n    changeset.push({ op: 'replace', path: '/remainingAmountMinor', val: limitMinor });\n    events.push({\n      type: 'PayNote/Reserve Funds Requested',\n      amount: limitMinor\n    });\n  }\n\n  if (targetMerchantId.trim().length > 0) {\n    events.push({\n      type: 'PayNote/Card Transaction Monitoring Consent Granted',\n      targetMerchantId,\n      grantedAt: timestamp\n    });\n  }\n}\n\nreturn {\n  changeset,\n  events\n};\n",
            },
            name: 'Prepare Activation',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Activation'].changeset}",
            },
            name: 'Apply Activation',
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
    confirmCardTransactionMonitoringStarted: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank confirms that monitoring has started.',
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmCardTransactionMonitoringStartedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmCardTransactionMonitoringStarted',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\nconst currentStatus = document('/monitoringStatus');\nconst targetMerchantId = document('/voucher/targetMerchantId');\nconst events = [];\nconst changeset = [];\n\nif (currentStatus === 'requested') {\n  changeset.push({ op: 'replace', path: '/monitoringStatus', val: 'started' });\n  changeset.push({ op: 'replace', path: '/monitoringStartedAt', val: timestamp });\n  events.push({\n    type: 'PayNote/Card Transaction Monitoring Started',\n    targetMerchantId,\n    startedAt: timestamp\n  });\n}\n\nreturn {\n  changeset,\n  events\n};\n",
            },
            name: 'Prepare Confirmation',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Confirmation'].changeset}",
            },
            name: 'Apply Confirmation',
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
    confirmFundsCaptured: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank confirms that cashback funds were captured.',
      request: {
        amountCaptured: {
          description: 'Amount captured in minor currency units.',
          type: {
            blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmFundsCapturedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmFundsCaptured',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst amountCaptured = request.amountCaptured;\nreturn {\n  events: [\n    {\n      type: 'PayNote/Funds Captured',\n      amountCaptured\n    }\n  ]\n};\n",
            },
            name: 'Emit Funds Captured',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    confirmFundsReserved: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank confirms that funds were reserved for the voucher.',
      request: {
        amountReserved: {
          description: 'Amount reserved in minor currency units.',
          type: {
            blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmFundsReservedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmFundsReserved',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst amountReserved = request.amountReserved;\nreturn {\n  events: [\n    {\n      type: 'PayNote/Funds Reserved',\n      amountReserved\n    }\n  ]\n};\n",
            },
            name: 'Emit Funds Reserved',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    confirmReservationReleased: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank confirms that reserved funds were released.',
      request: {
        amountReleased: {
          description: 'Amount released in minor currency units.',
          type: {
            blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmReservationReleasedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmReservationReleased',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst amountReleased = request.amountReleased;\nreturn {\n  events: [\n    {\n      type: 'PayNote/Reservation Released',\n      amountReleased\n    }\n  ]\n};\n",
            },
            name: 'Emit Reservation Released',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    eventsChannel: {
      type: {
        blueId: 'C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt',
      },
    },
    guarantorChannel: {
      description: 'Bank/guarantor responsible for monitoring and payouts.',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    handleCaptureDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'FzJqLm7Ek58LsVstJV2c37JfiMhRiWtjZNsiMz2ZfCYG',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const reason = event?.reason || '';\nconst responseRequestId = event?.inResponseTo?.requestId || '';\nconst requestPrefix = 'voucher-capture:';\nconst transactionId = responseRequestId.startsWith(requestPrefix)\n  ? responseRequestId.slice(requestPrefix.length)\n  : '';\nif (!transactionId) {\n  return { changeset: [] };\n}\n\nconst existingRecord =\n  document(`/voucherCashbackCaptureByTransactionId/${transactionId}`) || {};\nconst changeset = [\n  {\n    op: 'replace',\n    path: `/voucherCashbackCaptureByTransactionId/${transactionId}`,\n    val: {\n      status: 'declined',\n      requestedAmountMinor: existingRecord.requestedAmountMinor,\n      capturedAmountMinor: existingRecord.capturedAmountMinor,\n      failureReason: reason\n    }\n  }\n];\n\nreturn { changeset };\n",
            },
            name: 'Prepare Capture Decline',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Capture Decline'].changeset}",
            },
            name: 'Apply Capture Decline',
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
    handleCaptureFailed: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'FUh3TARSh4TjnWKAkM5ydjFWLWEmrFByKMBQzcgQfqRW',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const reason = event?.reason || '';\nconst responseRequestId = event?.inResponseTo?.requestId || '';\nconst requestPrefix = 'voucher-capture:';\nconst transactionId = responseRequestId.startsWith(requestPrefix)\n  ? responseRequestId.slice(requestPrefix.length)\n  : '';\nif (!transactionId) {\n  return { changeset: [] };\n}\n\nconst existingRecord =\n  document(`/voucherCashbackCaptureByTransactionId/${transactionId}`) || {};\nconst changeset = [\n  {\n    op: 'replace',\n    path: `/voucherCashbackCaptureByTransactionId/${transactionId}`,\n    val: {\n      status: 'failed',\n      requestedAmountMinor: existingRecord.requestedAmountMinor,\n      capturedAmountMinor: existingRecord.capturedAmountMinor,\n      failureReason: reason\n    }\n  }\n];\n\nreturn { changeset };\n",
            },
            name: 'Prepare Capture Failure',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Capture Failure'].changeset}",
            },
            name: 'Apply Capture Failure',
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
    handleEligibleCardTransactionReported: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'CNuH6dfnFaWMenCaVBf7NRz2KNBcHyddjYKakbYehAf8',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const report = event?.report || {};\nconst transactionId = report.transactionId || '';\nconst eligibleCashbackMinor = event?.eligibleCashbackMinor;\nconst captureByTransactionId = document('/voucherCashbackCaptureByTransactionId') || {};\nconst remainingAmountMinor = document('/remainingAmountMinor');\nconst limitMinor = document('/voucher/limitMinor');\n\nif (!transactionId) {\n  return { changeset: [], events: [] };\n}\nif (captureByTransactionId[transactionId]) {\n  return { changeset: [], events: [] };\n}\nif (!Number.isFinite(eligibleCashbackMinor) || eligibleCashbackMinor <= 0) {\n  return { changeset: [], events: [] };\n}\n\nconst availableRemaining = Number.isFinite(remainingAmountMinor)\n  ? remainingAmountMinor\n  : Number.isFinite(limitMinor)\n    ? limitMinor\n    : 0;\nconst captureAmount = Math.min(eligibleCashbackMinor, availableRemaining);\nif (!Number.isFinite(captureAmount) || captureAmount <= 0) {\n  return { changeset: [], events: [] };\n}\n\nreturn {\n  changeset: [\n    {\n      op: 'replace',\n      path: `/voucherCashbackCaptureByTransactionId/${transactionId}`,\n      val: {\n        status: 'requested',\n        requestedAmountMinor: captureAmount,\n        capturedAmountMinor: 0,\n        failureReason: ''\n      }\n    }\n  ],\n  events: [\n    {\n      type: 'PayNote/Capture Funds Requested',\n      requestId: `voucher-capture:${transactionId}`,\n      amount: captureAmount\n    }\n  ]\n};\n",
            },
            name: 'Prepare Capture Request',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Capture Request'].changeset}",
            },
            name: 'Apply Capture Request',
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
    handleFundsCaptured: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'BJvjorbC5ed5KTV7SxoV3CvrJXjrFPcFxY9QT4jHBbXi',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const amountCaptured = event?.amountCaptured;\nif (!Number.isFinite(amountCaptured) || amountCaptured <= 0) {\n  return { changeset: [] };\n}\n\nconst paidOutAmountMinor = document('/paidOutAmountMinor');\nconst remainingAmountMinor = document('/remainingAmountMinor');\nconst limitMinor = document('/voucher/limitMinor');\nconst nextPaidOutAmountMinor =\n  (Number.isFinite(paidOutAmountMinor) ? paidOutAmountMinor : 0) +\n  amountCaptured;\nlet nextRemainingAmountMinor;\nif (Number.isFinite(remainingAmountMinor)) {\n  nextRemainingAmountMinor = Math.max(0, remainingAmountMinor - amountCaptured);\n} else if (Number.isFinite(limitMinor)) {\n  nextRemainingAmountMinor = Math.max(0, limitMinor - nextPaidOutAmountMinor);\n}\n\nconst changeset = [\n  { op: 'replace', path: '/paidOutAmountMinor', val: nextPaidOutAmountMinor }\n];\nif (Number.isFinite(nextRemainingAmountMinor)) {\n  changeset.push({\n    op: 'replace',\n    path: '/remainingAmountMinor',\n    val: nextRemainingAmountMinor\n  });\n}\n\nconst responseRequestId = event?.inResponseTo?.requestId || '';\nconst requestPrefix = 'voucher-capture:';\nconst transactionId = responseRequestId.startsWith(requestPrefix)\n  ? responseRequestId.slice(requestPrefix.length)\n  : '';\nif (transactionId) {\n  const existingRecord =\n    document(`/voucherCashbackCaptureByTransactionId/${transactionId}`) || {};\n  changeset.push({\n    op: 'replace',\n    path: `/voucherCashbackCaptureByTransactionId/${transactionId}`,\n    val: {\n      status: 'captured',\n      requestedAmountMinor: existingRecord.requestedAmountMinor,\n      capturedAmountMinor: amountCaptured,\n      failureReason: ''\n    }\n  });\n}\n\nreturn { changeset };\n",
            },
            name: 'Prepare Capture Confirmation',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Capture Confirmation'].changeset}",
            },
            name: 'Apply Capture Confirmation',
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
    handleFundsReserved: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'AopfdGqnwcxsw4mJzXbmjDMnASRtkce9BZB1n6QSRNXX',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\n\nconst activatedAt = document('/activatedAt');\nif (!(activatedAt > 0)) {\n  return { changeset: [], events: [] };\n}\n\nconst monitoringStatus = document('/monitoringStatus');\nif (monitoringStatus === 'requested' || monitoringStatus === 'started' || monitoringStatus === 'rejected') {\n  return { changeset: [], events: [] };\n}\n\nconst targetMerchantId = document('/voucher/targetMerchantId') || '';\nif (!targetMerchantId.trim()) {\n  return { changeset: [], events: [] };\n}\n\nreturn {\n  changeset: [{ op: 'replace', path: '/monitoringStatus', val: 'requested' }],\n  events: [\n    {\n      type: 'PayNote/Start Card Transaction Monitoring Requested',\n      targetMerchantId,\n      reportOperationName: 'reportCardTransaction',\n      requestedAt: timestamp\n    }\n  ]\n};\n",
            },
            name: 'Prepare Monitoring Request',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Monitoring Request'].changeset}",
            },
            name: 'Apply Monitoring Request',
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
    handleReservationDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: '4xS8bmZQBGPENmaPfsrtYguYfq4hTtaZAXrefdyFNkKq',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\n\nreturn {\n  changeset: [\n    { op: 'replace', path: '/status', val: { type: 'Conversation/Status Failed' } },\n    { op: 'replace', path: '/terminatedAt', val: timestamp }\n  ]\n};\n",
            },
            name: 'Prepare Termination',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Termination'].changeset}",
            },
            name: 'Apply Termination',
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
    handleReservationReleased: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: 'CFqiZigjKE5JatANkaAkWw2NbgvEmb2BVEVPf3ckUrWg',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\n\nreturn {\n  changeset: [\n    { op: 'replace', path: '/status', val: { type: 'Conversation/Status Completed' } },\n    { op: 'replace', path: '/terminatedAt', val: timestamp }\n  ]\n};\n",
            },
            name: 'Prepare Termination',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Termination'].changeset}",
            },
            name: 'Apply Termination',
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
    handleReservationReleaseDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'eventsChannel',
      },
      event: {
        type: {
          blueId: '653sCbbRH3RiKhGjmVxh6wFVs4rn54wJRKDXRMKBZtjA',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\n\nreturn {\n  changeset: [\n    { op: 'replace', path: '/status', val: { type: 'Conversation/Status Failed' } },\n    { op: 'replace', path: '/terminatedAt', val: timestamp }\n  ]\n};\n",
            },
            name: 'Prepare Termination',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Termination'].changeset}",
            },
            name: 'Apply Termination',
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
    payeeChannel: {
      description: 'Voucher recipient (client/payee).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    payerChannel: {
      description: 'Voucher issuer (merchant/payer).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    rejectCardTransactionMonitoringRequest: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank rejects the monitoring request.',
      request: {
        reason: {
          description: 'Reason for rejecting monitoring.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectCardTransactionMonitoringRequestImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectCardTransactionMonitoringRequest',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\nconst currentStatus = document('/monitoringStatus');\nconst alreadyStarted = currentStatus === 'started';\nconst alreadyRejected = currentStatus === 'rejected';\nconst targetMerchantId = document('/voucher/targetMerchantId');\nconst request = event?.message?.request || {};\nconst reason = request.reason || '';\nconst events = [];\nconst changeset = [];\n\nif (!alreadyStarted && !alreadyRejected) {\n  changeset.push({ op: 'replace', path: '/monitoringStatus', val: 'rejected' });\n  changeset.push({ op: 'replace', path: '/monitoringRejectedAt', val: timestamp });\n  changeset.push({ op: 'replace', path: '/monitoringRejectionReason', val: reason });\n  changeset.push({\n    op: 'replace',\n    path: '/status',\n    val: { type: 'Conversation/Status Failed' }\n  });\n  changeset.push({ op: 'replace', path: '/terminatedAt', val: timestamp });\n  events.push({\n    type: 'PayNote/Card Transaction Monitoring Request Rejected',\n    targetMerchantId,\n    reason,\n    rejectedAt: timestamp\n  });\n\n  const limitMinor = document('/voucher/limitMinor');\n  if (Number.isFinite(limitMinor) && limitMinor >= 0) {\n    events.push({\n      type: 'PayNote/Reservation Release Requested',\n      amount: limitMinor\n    });\n  }\n}\n\nreturn {\n  changeset,\n  events\n};\n",
            },
            name: 'Prepare Rejection',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Rejection'].changeset}",
            },
            name: 'Apply Rejection',
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
    rejectVoucher: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payeeChannel',
      },
      description:
        'Client rejects the voucher and declines consent for monitoring.',
      request: {
        reason: {
          description: 'Optional reason for rejecting the voucher.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectVoucherImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectVoucher',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\nconst request = event?.message?.request || {};\nconst reason = request.reason || '';\nconst targetMerchantId = document('/voucher/targetMerchantId') || '';\nconst activatedAt = document('/activatedAt');\nconst limitMinor = document('/voucher/limitMinor');\nconst changeset = [\n  { op: 'replace', path: '/monitoringStatus', val: 'rejected' },\n  { op: 'replace', path: '/monitoringRejectedAt', val: timestamp },\n  { op: 'replace', path: '/monitoringRejectionReason', val: reason }\n];\n\nconst events = [\n  {\n    type: 'PayNote/Card Transaction Monitoring Consent Rejected',\n    targetMerchantId,\n    reason,\n    rejectedAt: timestamp\n  }\n];\n\nif (activatedAt > 0 && Number.isFinite(limitMinor) && limitMinor >= 0) {\n  events.push({\n    type: 'PayNote/Reservation Release Requested',\n    amount: limitMinor\n  });\n} else if (!(activatedAt > 0)) {\n  changeset.push({\n    op: 'replace',\n    path: '/status',\n    val: { type: 'Conversation/Status Completed' }\n  });\n  changeset.push({ op: 'replace', path: '/terminatedAt', val: timestamp });\n}\n\nreturn { changeset, events };\n",
            },
            name: 'Prepare Rejection',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Rejection'].changeset}",
            },
            name: 'Apply Rejection',
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
    reportCaptureDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Bank reports that the cashback capture request was declined.',
      request: {
        reason: {
          description: 'Reason capture was declined.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportCaptureDeclinedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportCaptureDeclined',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst reason = request.reason || '';\nreturn {\n  events: [\n    {\n      type: 'PayNote/Capture Declined',\n      reason\n    }\n  ]\n};\n",
            },
            name: 'Emit Capture Declined',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    reportCaptureFailure: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Bank reports cashback capture failed for a technical reason.',
      request: {
        reason: {
          description: 'Reason capture failed.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportCaptureFailureImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportCaptureFailure',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst reason = request.reason || '';\nreturn {\n  events: [\n    {\n      type: 'PayNote/Capture Failed',\n      reason\n    }\n  ]\n};\n",
            },
            name: 'Emit Capture Failed',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    reportCardTransaction: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description: 'Bank reports a captured card transaction into the voucher.',
      request: {
        type: {
          blueId: 'CTbHBf2xvYzi2JzwbwSR1B2z5NP566dKDyb1TkBGHfYp',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportCardTransactionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportCardTransaction',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst transactionId = request.transactionId?.trim() || '';\nconst events = [];\nconst changeset = [];\n\nconst amountMinor = request.amountMinor;\nconst currency = request.currency || '';\nconst merchantId = request.merchantId || '';\nconst occurredAt = request.occurredAt || '';\nconst report = {\n  transactionId,\n  merchantId,\n  amountMinor,\n  currency,\n  occurredAt\n};\n\nif (!transactionId) {\n  events.push({\n    type: 'PayNote/Ineligible Card Transaction Reported',\n    report,\n    reason: 'Transaction id is missing.'\n  });\n  return { changeset, events };\n}\n\nconst existing = document(`/reportedTransactionsById/${transactionId}`);\nif (existing) {\n  events.push({\n    type: 'PayNote/Ineligible Card Transaction Reported',\n    report,\n    reason: 'Duplicate transaction id.'\n  });\n  return { changeset, events };\n}\n\nconst targetMerchantId = document('/voucher/targetMerchantId');\nconst monitoringStatus = document('/monitoringStatus');\nconst activatedAt = document('/activatedAt');\nconst limitMinor = document('/voucher/limitMinor');\nconst remainingAmountMinor = document('/remainingAmountMinor');\nconst reasons = [];\n\nif (!(activatedAt > 0)) {\n  reasons.push('Voucher is not activated.');\n}\nif (monitoringStatus !== 'started') {\n  reasons.push('Monitoring has not started.');\n}\nif (!merchantId || merchantId !== targetMerchantId) {\n  reasons.push('Merchant does not match the voucher target merchant.');\n}\nif (!Number.isFinite(amountMinor) || amountMinor < 0) {\n  reasons.push('Amount is invalid.');\n}\nif (!currency) {\n  reasons.push('Currency is missing.');\n}\nif (!occurredAt) {\n  reasons.push('Occurred-at timestamp is missing.');\n}\nconst availableLimit = Number.isFinite(remainingAmountMinor)\n  ? remainingAmountMinor\n  : limitMinor;\nif (!Number.isFinite(availableLimit) || availableLimit < 0) {\n  reasons.push('Voucher limit is invalid.');\n} else if (availableLimit === 0) {\n  reasons.push('Voucher has no remaining balance.');\n}\n\nif (reasons.length === 0) {\n  const eligibleCashbackMinor = Math.min(availableLimit, amountMinor);\n  changeset.push({\n    op: 'replace',\n    path: `/reportedTransactionsById/${transactionId}`,\n    val: report\n  });\n  events.push({\n    type: 'PayNote/Eligible Card Transaction Reported',\n    report,\n    eligibleCashbackMinor\n  });\n} else {\n  events.push({\n    type: 'PayNote/Ineligible Card Transaction Reported',\n    report,\n    reason: reasons.join('; ')\n  });\n}\n\nreturn {\n  changeset,\n  events\n};\n",
            },
            name: 'Prepare Report',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: "${steps['Prepare Report'].changeset}",
            },
            name: 'Apply Report',
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
    reportReservationDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Bank reports that the voucher reservation request was declined.',
      request: {
        reason: {
          description: 'Reason reservation was declined.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportReservationDeclinedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportReservationDeclined',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst reason = request.reason || '';\nreturn {\n  events: [\n    {\n      type: 'PayNote/Reservation Declined',\n      reason\n    }\n  ]\n};\n",
            },
            name: 'Emit Reservation Declined',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    reportReservationReleaseDeclined: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Bank reports that the reservation release request was declined.',
      request: {
        reason: {
          description: 'Reason release was declined.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportReservationReleaseDeclinedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportReservationReleaseDeclined',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request = event?.message?.request || {};\nconst reason = request.reason || '';\nreturn {\n  events: [\n    {\n      type: 'PayNote/Reservation Release Declined',\n      reason\n    }\n  ]\n};\n",
            },
            name: 'Emit Reservation Release Declined',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    requestMonitoringConsentOnInit: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const timestamp = event?.timestamp;\nconst targetMerchantId = document('/voucher/targetMerchantId') || '';\nif (!targetMerchantId.trim()) {\n  return { events: [] };\n}\n\nreturn {\n  events: [\n    {\n      type: 'PayNote/Card Transaction Monitoring Consent Requested',\n      targetMerchantId,\n      requestedAt: timestamp\n    }\n  ]\n};\n",
            },
            name: 'Emit Consent Requested',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
      },
    },
  },
  description:
    'Voucher contract that funds cashback for eligible card transactions.',
  monitoringRejectedAt: {
    description:
      'Timestamp (microseconds since epoch) when monitoring was rejected.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  monitoringRejectionReason: {
    description: 'Reason monitoring was rejected.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  monitoringStartedAt: {
    description:
      'Timestamp (microseconds since epoch) when monitoring started.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  monitoringStatus: {
    description: 'Monitoring lifecycle status (requested, started, rejected).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'PayNote Voucher',
  paidOutAmountMinor: {
    description: 'Total cashback amount confirmed as paid out.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
    value: 0,
  },
  remainingAmountMinor: {
    description: 'Remaining cashback amount available for future payouts.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
    value: 0,
  },
  reportedTransactionsById: {
    description:
      'Map of reported transactions keyed by transactionId for idempotency.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'CTbHBf2xvYzi2JzwbwSR1B2z5NP566dKDyb1TkBGHfYp',
    },
  },
  status: {
    description: 'Current voucher status.',
    type: {
      blueId: '58B8orsFkxxy7bWqjLXJmtBs2b5rwnNQNbeoAbGhPkJc',
    },
    value: {
      type: {
        blueId: 'ETAPjwZVyYEfPUWvXkCWAuybBhYUayg4hKC2V7mLXmsv',
      },
    },
  },
  terminatedAt: {
    description:
      'Timestamp (microseconds since epoch) when the voucher was terminated.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  voucher: {
    description: 'Voucher configuration supplied at issuance.',
    issuerMerchantId: {
      description: 'External merchant identifier funding the voucher (payer).',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    limitMinor: {
      description: 'Maximum cashback amount in minor currency units.',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
    targetMerchantId: {
      description: 'External merchant identifier whose purchases are eligible.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  voucherCashbackCaptureByTransactionId: {
    description: 'Voucher cashback capture record per transaction.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      capturedAmountMinor: {
        description: 'Cashback amount confirmed as captured, in minor units.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      description:
        'Voucher cashback capture lifecycle record for an eligible transaction.',
      failureReason: {
        description:
          'Reason for declined or failed cashback capture, if applicable.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      name: 'Capture Record',
      requestedAmountMinor: {
        description: 'Cashback amount requested for capture, in minor units.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      status: {
        description:
          'Voucher cashback capture status (requested, captured, declined, failed).',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
} as const;
