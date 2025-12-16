export const ChatGPTConnectorAgent = {
  "name": "Chat GPT Connector Agent",
  "type": {
    "blueId": "8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc"
  },
  "description": "Lets the owner prompt installation of a provided MyOS Package.",
  "contracts": {
    "ownerChannel": {
      "type": {
        "blueId": "HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs"
      }
    },
    "startWorker": {
      "type": {
        "blueId": "BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC"
      },
      "channel": {
        "value": "ownerChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "description": "Prompt the user to install a provided MyOS Package",
      "request": {
        "package": {
          "type": {
            "blueId": "4kzDrFuoU4PmvVxh5JAcFpDWGHYw7r7EaQw6Nufp3wX4"
          },
          "description": "MyOS Package"
        }
      }
    },
    "startWorkerImpl": {
      "type": {
        "blueId": "CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv"
      },
      "operation": {
        "value": "startWorker",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "steps": {
        "items": [
          {
            "name": "Emit Install Prompt",
            "type": {
              "blueId": "GxUtWr3eH9a6YQeioQkujEnsPjD5s9RU8ZhEfmsV1vuU"
            },
            "event": {
              "type": {
                "blueId": "EZUH4HyJzMdH8oYRmTnQNZHEcgmR4AX51DSfp8diZNhQ"
              },
              "title": {
                "value": "ChatGPT is requesting permission to launch a new agent",
                "type": {
                  "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                }
              },
              "message": {
                "value": "A package has been prepared for you. Review and install.",
                "type": {
                  "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
                }
              },
              "package": {
                "type": {
                  "blueId": "4kzDrFuoU4PmvVxh5JAcFpDWGHYw7r7EaQw6Nufp3wX4"
                },
                "value": "${event.message.request.package}"
              }
            }
          }
        ]
      }
    }
  }
} as const;
