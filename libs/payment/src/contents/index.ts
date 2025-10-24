import { money } from './Money';
import { payeeAccountNumberChangeApprovedByBank } from './PayeeAccountNumberChangeApprovedByBank';
import { transferCancellationApprovedByBank } from './TransferCancellationApprovedByBank';
import { transferAuthorizationApprovedByBank } from './TransferAuthorizationApprovedByBank';
import { payeeAccountNumberChangeRequested } from './PayeeAccountNumberChangeRequested';
import { transferCaptureApprovedByBank } from './TransferCaptureApprovedByBank';
import { transferAuthorizationRequested } from './TransferAuthorizationRequested';
import { transferCaptureRequested } from './TransferCaptureRequested';
import { transferCancellationRequested } from './TransferCancellationRequested';
import { smartTransfer } from './SmartTransfer';

export const contents = {
  '3MmBpnHfzcm8JLwMZx5nBXo6S1eyjf5Gz17Js4N4Wvfj': money,
  '6ff9c62j4af59tyxfhUw6GRooCEnFnynj1KMFxVUS8AC':
    payeeAccountNumberChangeApprovedByBank,
  '76RNmYLf2tz6urNmZTFmx8SMdYoxUdRaGJTDNbfkDYcr':
    transferCancellationApprovedByBank,
  '8MyPATUAGkkUPXn7Hw8fj4WqbnZyfKVvwNexjSfUkJri':
    transferAuthorizationApprovedByBank,
  '8N5ncnno6UCuhvKsG9NrR6xCJKmeUn38NFeoQvoht5yj':
    payeeAccountNumberChangeRequested,
  '9VxFD2G57RLHBfAuKTpXTdr3GDV5TVXuje6ZPUsYJfHV': transferCaptureApprovedByBank,
  AosAMMyKZcGsEQS2jeH6pVinaCkzwHb8b1mLJWtNf8qF: transferAuthorizationRequested,
  FZBYRqmomC7WX2BwAfcrcWjdE5LoQSRYYKnoww2mpcLz: transferCaptureRequested,
  HjToW1puNScEFcsKAvSvJ85y9xBXGw4LAoVcqnt9DDAd: transferCancellationRequested,
  T52FwxVeRJypWoC17rW2viKr8SxFEcE9qt8T1BMkfwQ: smartTransfer,
} as const;
