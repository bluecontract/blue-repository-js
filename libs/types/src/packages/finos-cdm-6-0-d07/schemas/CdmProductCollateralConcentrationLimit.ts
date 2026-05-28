import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';

export const CdmProductCollateralConcentrationLimitSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ConcentrationLimit']
  )(
    z.object({
      concentrationLimitCriteria: z
        .lazy(() => CdmProductCollateralConcentrationLimitCriteriaSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      percentageLimit: z.lazy(() => CdmBaseMathNumberRangeSchema).optional(),
      valueLimit: z.lazy(() => CdmBaseMathMoneyRangeSchema).optional(),
    })
  );

export type CdmProductCollateralConcentrationLimit = z.infer<
  typeof CdmProductCollateralConcentrationLimitSchema
>;
