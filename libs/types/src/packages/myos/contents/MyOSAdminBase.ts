export const MyOSAdminBase = {
  "name": "MyOS Admin Base",
  "description": "Document base for MyOS Admin participant",
  "contracts": {
    "myOsAdminChannel": {
      "type": {
        "blueId": "HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs"
      },
      "description": "MyOS Admin (accountId=0) — posts operational progress/decisions via myOsAdminUpdate"
    },
    "myOsAdminUpdate": {
      "type": {
        "blueId": "BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC"
      },
      "description": "The standard, required operation for MyOS Admin to deliver events.",
      "channel": {
        "value": "myOsAdminChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      }
    },
    "myOsAdminUpdateImpl": {
      "type": {
        "blueId": "CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv"
      },
      "description": "Implementation that re-emits the provided events",
      "operation": {
        "value": "myOsAdminUpdate",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "steps": {
        "items": [
          {
            "name": "EmitAdminEvents",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "return { events: event.message.request };\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          }
        ]
      }
    }
  }
} as const;
