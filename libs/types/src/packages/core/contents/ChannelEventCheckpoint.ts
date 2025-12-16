export const ChannelEventCheckpoint = {
  "name": "Channel Event Checkpoint",
  "type": {
    "blueId": "7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6"
  },
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nStores last-seen events per external channel at this scope to enable\nidempotent processing and ordering. Updates are Direct Writes (no Document Update).\n",
  "lastEvents": {
    "description": "Map of channelKey (the contracts key of an external channel in this scope)\nto the entire last event node seen for that channel. Values are unconstrained\n(any Blue node) to allow channel-specific shapes.\n",
    "type": {
      "blueId": "G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj"
    },
    "keyType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    }
  }
} as const;
