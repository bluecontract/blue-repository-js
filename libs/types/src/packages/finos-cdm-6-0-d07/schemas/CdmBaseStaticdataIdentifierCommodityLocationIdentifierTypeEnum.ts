import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/CommodityLocationIdentifierTypeEnum'
    ]
  )(
    z.enum([
      'BuyerHub',
      'DeliveryPoint',
      'DeliveryZone',
      'EntryPoint',
      'InterconnectionPoint',
      'SellerHub',
      'WithdrawalPoint',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum =
  z.infer<
    typeof CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema
  >;
