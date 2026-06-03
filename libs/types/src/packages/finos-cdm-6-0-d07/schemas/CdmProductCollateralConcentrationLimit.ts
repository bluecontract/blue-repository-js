import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';

const zod = z as any;

export const CdmProductCollateralConcentrationLimitSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ConcentrationLimit']
)(
  zod.object({
    concentrationLimitCriteria: zod
      .lazy(() => CdmProductCollateralConcentrationLimitCriteriaSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    percentageLimit: zod.lazy(() => CdmBaseMathNumberRangeSchema).optional(),
    valueLimit: zod.lazy(() => CdmBaseMathMoneyRangeSchema).optional(),
  })
);

export type CdmProductCollateralConcentrationLimit = z.infer<
  typeof CdmProductCollateralConcentrationLimitSchema
>;
