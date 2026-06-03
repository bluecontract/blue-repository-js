import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';

const zod = z as any;

export const CdmBaseStaticdataPartyPayerReceiverSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PayerReceiver']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payer: zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
    receiver: zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyPayerReceiver = z.infer<
  typeof CdmBaseStaticdataPartyPayerReceiverSchema
>;
