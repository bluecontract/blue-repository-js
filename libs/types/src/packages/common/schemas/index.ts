import type { ZodTypeAny } from 'zod';
import { CryptoEd25519VerifySchema } from './CryptoEd25519Verify';
import { CurrencySchema } from './Currency';
import { DocumentSchema } from './Document';
import { DocumentAnchorSchema } from './DocumentAnchor';
import { DocumentAnchorsSchema } from './DocumentAnchors';
import { NamedEventSchema } from './NamedEvent';
import { PaymentSchema } from './Payment';
import { PermissionGrantSchema } from './PermissionGrant';
import { ProfileSchema } from './Profile';
import { RecordSchema } from './Record';
import { RelationshipSchema } from './Relationship';
import { RequestSchema } from './Request';
import { ResponseSchema } from './Response';
import { ServiceSchema } from './Service';
import { SpaceSchema } from './Space';
import { TaskSchema } from './Task';
import { TimestampSchema } from './Timestamp';

export { CryptoEd25519VerifySchema } from './CryptoEd25519Verify';
export { CurrencySchema } from './Currency';
export { DocumentSchema } from './Document';
export { DocumentAnchorSchema } from './DocumentAnchor';
export { DocumentAnchorsSchema } from './DocumentAnchors';
export { NamedEventSchema } from './NamedEvent';
export { PaymentSchema } from './Payment';
export { PermissionGrantSchema } from './PermissionGrant';
export { ProfileSchema } from './Profile';
export { RecordSchema } from './Record';
export { RelationshipSchema } from './Relationship';
export { RequestSchema } from './Request';
export { ResponseSchema } from './Response';
export { ServiceSchema } from './Service';
export { SpaceSchema } from './Space';
export { TaskSchema } from './Task';
export { TimestampSchema } from './Timestamp';

export const schemas: Record<string, ZodTypeAny> = {
  '6P98bLNKcsNPUovBBsLu6W3BQnrg6F8TPjhbZhegrDSL': CryptoEd25519VerifySchema,
  rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ: CurrencySchema,
  B62tsckv8aQiyFAchgqgptfB5C6jtDPkS2pLT1h3G793: DocumentSchema,
  Bu4KzxxpJuHvET1RTBzioDXpWcqmvYzmqGRiDKmktHUo: DocumentAnchorSchema,
  '5UhQNW5kxq9QrAkjnajrGV7B4nN5Cun6puDNkqUyxF4e': DocumentAnchorsSchema,
  AJXU1CbY6HmjCknkWm1ng2pGvStRPzhs3jq4WWLVwWLK: NamedEventSchema,
  HSvngEMxS34qTVo3TNufgbR7pLcZY9gq94FNLdHeGKaZ: PaymentSchema,
  EqJ715y2fFsWhgBRXg5X9GDBxrkEsdend14hHmSsD8Ma: PermissionGrantSchema,
  DDAmA9UAt9mPSwLfBN95yLy3MPrvsC2tjGPcAYaxoWHc: ProfileSchema,
  '3jiCk56nE5ULAqAWz6ANyVexCtr8PR54TEogRNECT61z': RecordSchema,
  F7LgS1HLXL7CBP3D1LW8ncdfn1euZWBBbQ63pMbfFG1n: RelationshipSchema,
  '7SGwopxFbqfpY4pUVSVacVy17tPE1Tt2uxCumG3BoF27': RequestSchema,
  '8T2FPZcsJdWFvThipSCbTEGQRdUhUrg3nfvYBA4TnKzy': ResponseSchema,
  EC4hx8cFZ9JwWCnECdoPPatsHb4sAq6QEhDLcHCcAo3t: ServiceSchema,
  '9NWJbMy2sRh6KdLQGhQqFx6Ta8LZen5NMcdg2vqeG9yC': SpaceSchema,
  Bv2m44vKZdG4tekaEBmCTQTDAvhBjnojy8sbPKZYTe9V: TaskSchema,
  '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk': TimestampSchema,
};
