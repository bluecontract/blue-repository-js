import { ticket } from './Ticket';
import { ticket2 } from './Ticket2';
import { priorityTicket } from './PriorityTicket';
import { ticket4 } from './Ticket4';
import { myContract } from './MyContract';
import { ticket3 } from './Ticket3';

export const contents = {
  '5kBhHAXaGRZ4as5Ak8z8m6YJMSQZffhXMY4XTDBiPsu7': ticket,
  '8WSwFKTgvJKrEoBnWDgW3imhpfV9y3XXzGZyyNMX9UTJ': ticket2,
  '9RiiBCe53Wa6vneRxyUp48YYAQdbePFD79psw3Zp4PPe': priorityTicket,
  AESwceBtZfyiMGCc5xuV7isHBaaBuz2y4eSEeQaz8L8r: ticket4,
  Eha9p5bYX2WpNwDBEiZosaQRuMyqRgnwe4k9PFoYRWA2: myContract,
  GH8HQEg2KMyWkut77GNoY6BDfBWkftgnAentX9rALjj3: ticket3,
} as const;
