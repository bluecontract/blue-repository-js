import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyPayerReceiverEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PayerReceiverEnum']
  )(
    z.enum(['Payer', 'Receiver'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyPayerReceiverEnum = z.infer<
  typeof CdmBaseStaticdataPartyPayerReceiverEnumSchema
>;
