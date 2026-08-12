import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';

const zod = z as any;

export const CdmBaseStaticdataPartyBuyerSellerSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/BuyerSeller']
)(
  zod.object({
    buyer: zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    seller: zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyBuyerSeller = z.infer<
  typeof CdmBaseStaticdataPartyBuyerSellerSchema
>;
