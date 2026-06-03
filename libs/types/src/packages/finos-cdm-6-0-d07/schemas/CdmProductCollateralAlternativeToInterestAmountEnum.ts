import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralAlternativeToInterestAmountEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/AlternativeToInterestAmountEnum'
    ]
  )(
    zod.enum([
      'ActualAmountReceived',
      'Other',
      'Standard',
      'TransferIfDeliveryAmountBelowMTA',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralAlternativeToInterestAmountEnum = z.infer<
  typeof CdmProductCollateralAlternativeToInterestAmountEnumSchema
>;
