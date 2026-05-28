import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';

export const CdmBaseStaticdataPartyBuyerSellerSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/BuyerSeller']
  )(
    z.object({
      buyer: z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      seller: z.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
    })
  );

export type CdmBaseStaticdataPartyBuyerSeller = z.infer<
  typeof CdmBaseStaticdataPartyBuyerSellerSchema
>;
