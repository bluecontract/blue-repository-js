export const DocumentSessionBootstrap = {
  "name": "Document Session Bootstrap",
  "type": {
    "blueId": "FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o"
  },
  "description": "MyOS-specific document for bootstrapping document sessions and tracking bootstrap progress",
  "document": {
    "description": "Target Blue document to be bootstrapped"
  },
  "channelBindings": {
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "valueType": {
      "blueId": "DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr"
    },
    "description": "Maps channel names to participant identifiers"
  },
  "initialMessages": {
    "description": "Messages sent to participants when inviting them to the bootstrapped document",
    "defaultMessage": {
      "type": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Default invitation message sent to all participants"
    },
    "perChannel": {
      "type": {
        "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
      },
      "keyType": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "valueType": {
        "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
      },
      "description": "Per-channel custom invitation messages"
    }
  },
  "capabilities": {
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "valueType": {
      "blueId": "4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u"
    },
    "description": "Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)"
  },
  "bootstrapStatus": {
    "type": {
      "blueId": "58B8orsFkxxy7bWqjLXJmtBs2b5rwnNQNbeoAbGhPkJc"
    },
    "description": "Overall bootstrap process status"
  },
  "bootstrapError": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Error message explaining bootstrap failure"
  },
  "initiatorSessionIds": {
    "type": {
      "blueId": "6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY"
    },
    "itemType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Session IDs created for the bootstrap initiator (caller)"
  },
  "participantsState": {
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "description": "Maps channel names to participant activation tracking",
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "valueType": {
      "blueId": "CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB"
    }
  },
  "contracts": {
    "triggeredEventsChannel": {
      "type": {
        "blueId": "C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt"
      }
    },
    "lifecycle": {
      "type": {
        "blueId": "H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr"
      },
      "event": {
        "type": {
          "blueId": "BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2"
        }
      }
    },
    "initHandler": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "lifecycle",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Initialize Bootstrap Status",
            "type": {
              "blueId": "BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM"
            },
            "changeset": {
              "items": [
                {
                  "op": {
                    "value": "replace",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "path": {
                    "value": "/bootstrapStatus",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "val": {
                    "type": {
                      "blueId": "56Lhu3Z2oF3kuYG41eZAK8TvgVtRNevkbRi4D31kKWZm"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "handleParticipantResolved": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "triggeredEventsChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "event": {
        "type": {
          "blueId": "EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Prepare Participant State",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "const participantState = {\n  accountStatus: event.participant?.status?.accountStatus || 'Unknown', // \"Active\" | \"Inactive\"\n  errorMessage: ''\n};\n\nreturn {\n  participantState,\n  channelName: event.channelName\n};\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          },
          {
            "name": "Update Participants State",
            "type": {
              "blueId": "BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM"
            },
            "changeset": {
              "items": [
                {
                  "op": {
                    "value": "replace",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "path": {
                    "value": "/participantsState/${steps['Prepare Participant State'].channelName}",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "val": {
                    "value": "${steps['Prepare Participant State'].participantState}",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "handleTargetDocumentSessionStarted": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "triggeredEventsChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "event": {
        "type": {
          "blueId": "FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Update Initiator Session",
            "type": {
              "blueId": "BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM"
            },
            "changeset": {
              "items": [
                {
                  "op": {
                    "value": "replace",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "path": {
                    "value": "/initiatorSessionIds",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "val": {
                    "value": "${event.initiatorSessionIds}",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Emit Completion Event",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "return { events: [ { type: 'Status Change', status: { type: 'Status Completed' } } ] };\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          }
        ]
      }
    },
    "handleBootstrapFailed": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "triggeredEventsChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "event": {
        "type": {
          "blueId": "9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Update Error Message",
            "type": {
              "blueId": "BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM"
            },
            "changeset": {
              "items": [
                {
                  "op": {
                    "value": "replace",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "path": {
                    "value": "/bootstrapError",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "val": {
                    "value": "${event.reason}",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Emit Failure Event",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "return { events: [ { type: 'Status Change', status: { type: 'Status Failed' } } ] };\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          }
        ]
      }
    },
    "handleStatusChange": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "triggeredEventsChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "event": {
        "type": {
          "blueId": "C48nKSkbxraMSv4gCiGYVHKFjmtK12k63Yasn95zknWE"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Update Bootstrap Status",
            "type": {
              "blueId": "BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM"
            },
            "changeset": {
              "items": [
                {
                  "op": {
                    "value": "replace",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "path": {
                    "value": "/bootstrapStatus",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  },
                  "val": {
                    "value": "${event.status}",
                    "type": {
                      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
} as const;
