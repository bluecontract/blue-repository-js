import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralCollateralInterestHandlingEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestHandlingEnum'
    ]
  )(
    z.enum(['Adjust', 'Transfer', 'Transfer_or_Adjust'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralCollateralInterestHandlingEnum = z.infer<
  typeof CdmProductCollateralCollateralInterestHandlingEnumSchema
>;
