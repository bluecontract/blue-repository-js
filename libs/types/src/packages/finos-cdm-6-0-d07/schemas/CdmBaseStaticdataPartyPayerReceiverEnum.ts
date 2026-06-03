import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataPartyPayerReceiverEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PayerReceiverEnum']
  )(
    zod.enum(['Payer', 'Receiver'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyPayerReceiverEnum = z.infer<
  typeof CdmBaseStaticdataPartyPayerReceiverEnumSchema
>;
