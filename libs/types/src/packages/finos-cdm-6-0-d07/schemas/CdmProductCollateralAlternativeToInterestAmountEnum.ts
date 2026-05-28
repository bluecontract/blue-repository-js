import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralAlternativeToInterestAmountEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/AlternativeToInterestAmountEnum'
    ]
  )(
    z.enum([
      'ActualAmountReceived',
      'Other',
      'Standard',
      'TransferIfDeliveryAmountBelowMTA',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralAlternativeToInterestAmountEnum = z.infer<
  typeof CdmProductCollateralAlternativeToInterestAmountEnumSchema
>;
