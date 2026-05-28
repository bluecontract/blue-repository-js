import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';

export const CdmBaseStaticdataPartyPayerReceiverSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PayerReceiver']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      payer: z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
      receiver: z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyPayerReceiver = z.infer<
  typeof CdmBaseStaticdataPartyPayerReceiverSchema
>;
