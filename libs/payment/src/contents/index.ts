import { money } from './Money';
import { transferAuthorizationApprovedByBank } from './TransferAuthorizationApprovedByBank';
import { transferCancellationApprovedByBank } from './TransferCancellationApprovedByBank';
import { transferCaptureApprovedByBank } from './TransferCaptureApprovedByBank';
import { smartTransfer } from './SmartTransfer';
import { transferAuthorizationRequested } from './TransferAuthorizationRequested';
import { transferCaptureRequested } from './TransferCaptureRequested';
import { payeeAccountNumberChangeRequested } from './PayeeAccountNumberChangeRequested';
import { transferCancellationRequested } from './TransferCancellationRequested';
import { payeeAccountNumberChangeApprovedByBank } from './PayeeAccountNumberChangeApprovedByBank';

export const contents = {
  '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69': money,
  '49ThQrHgJdJGs2FgyKrTe1cf98VV6xXe9r6wZJtjAiyE':
    transferAuthorizationApprovedByBank,
  '76RNmYLf2tz6urNmZTFmx8SMdYoxUdRaGJTDNbfkDYcr':
    transferCancellationApprovedByBank,
  '9VxFD2G57RLHBfAuKTpXTdr3GDV5TVXuje6ZPUsYJfHV': transferCaptureApprovedByBank,
  B9a3hUCGe5vPGJcM7giQh553bNSxN1znCNS6eXUJZ8Q1: smartTransfer,
  D5KcP1MYfjbBRQd192SYZK9DxFNU3WrGp8VmZJjombEv: transferAuthorizationRequested,
  FZBYRqmomC7WX2BwAfcrcWjdE5LoQSRYYKnoww2mpcLz: transferCaptureRequested,
  GnGGfevYaNgUSv1qPtWDUhV5ReAFE7oFdGZ6FLD6Lf5L:
    payeeAccountNumberChangeRequested,
  HjToW1puNScEFcsKAvSvJ85y9xBXGw4LAoVcqnt9DDAd: transferCancellationRequested,
  Yrpy3UA4KhfW5axU2E5rCoejQnHDaTjaZBLKUgcVb1d:
    payeeAccountNumberChangeApprovedByBank,
} as const;
