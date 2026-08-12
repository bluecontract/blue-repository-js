import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralRatingPriorityResolutionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/RatingPriorityResolutionEnum'
    ]
  )(
    zod.enum(['Asset', 'Average', 'Highest', 'Issuer', 'Lowest'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralRatingPriorityResolutionEnum = z.infer<
  typeof CdmProductCollateralRatingPriorityResolutionEnumSchema
>;
