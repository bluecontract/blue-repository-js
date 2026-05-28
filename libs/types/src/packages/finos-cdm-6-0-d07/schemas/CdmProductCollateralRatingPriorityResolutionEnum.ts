import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralRatingPriorityResolutionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/RatingPriorityResolutionEnum'
    ]
  )(
    z.enum(['Asset', 'Average', 'Highest', 'Issuer', 'Lowest'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralRatingPriorityResolutionEnum = z.infer<
  typeof CdmProductCollateralRatingPriorityResolutionEnumSchema
>;
