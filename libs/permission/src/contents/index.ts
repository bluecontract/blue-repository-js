import { singleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
import { singleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
import { singleDocumentPermissionSet } from './SingleDocumentPermissionSet';
import { singleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
import { singleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
import { singleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
import { singleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
import { singleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
import { singleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
import { singleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
import { singleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
import { singleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
import { singleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';

export const contents = {
  '6dzRFbNGRsc9ouzDZQ8FnQfpnKm1ynFx5f4SLTVrj4m3':
    singleDocumentPermissionRejected,
  '7LsM1JW5fHsoBxi5W5Af2k19URaPdper6wX8wfnjcqU1':
    singleDocumentPermissionGranted,
  '7TCdQstz98WJ8RXqizemdpdg723HeqTZHHiRXCnso7b4': singleDocumentPermissionSet,
  A9oH1Jr3xp95xby9wzRn4JzmmSLEFbRR9vYEExCwJ2BF:
    singleDocumentPermissionGrantToDocument,
  DMcb6BKQWapmR6TerSoiYmoKZ5UdE3r36Jy242Qo5Cwh: singleDocumentPermissionInvalid,
  EdoPE6wJ1V1EUtKgjYjME5Vxc5BZ4SwQrmjXsXvFdhAJ:
    singleDocumentPermissionGrantingInProgress,
  EXG3ai2f6qh3ywXhg3qi8wRSCG47g3mvgHwzEvC3ihDJ:
    singleDocumentPermissionValidated,
  FkCoPPvv4dwcTZWHwPXJWuJZXixneLFoDeLEpB9WSGg7:
    singleDocumentPermissionGrantResponded,
  FTvWJeG1xB4EJ8NphzvQS6rJzWySm7o8PSXEGEijW1Be: singleDocumentPermissionRevoked,
  G7XoUDyRbbJMAks9piopJqf4M8kg6Mr5v5nDCzSp2M7u:
    singleDocumentPermissionGrantRequested,
  GofV4wmVNKQGe4UViBgeNLCSf8FMcu8CUYceFPZUXeHf:
    singleDocumentPermissionRevokeRequested,
  GP3TSyQqxcZHmtq1M8oqrDh2yu7sQH2TumD9YCW6pmRA:
    singleDocumentPermissionGrantToAccount,
  GVzWzr9pkRpeBbQ8tjBJJzG34gzaC7Wcr31sw22bKZAP:
    singleDocumentPermissionRevokingInProgress,
} as const;
