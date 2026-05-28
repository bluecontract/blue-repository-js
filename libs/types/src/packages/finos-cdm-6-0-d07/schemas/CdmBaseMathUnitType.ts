import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseMathUnitTypeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/UnitType']
)(
  z.object({
    capacityUnit: z.lazy(() => CdmBaseMathCapacityUnitEnumSchema).optional(),
    currency: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    description: z.string().optional(),
    financialUnit: z.lazy(() => CdmBaseMathFinancialUnitEnumSchema).optional(),
    name: z.string().optional(),
    weatherUnit: z.lazy(() => CdmBaseMathWeatherUnitEnumSchema).optional(),
  })
);

export type CdmBaseMathUnitType = z.infer<typeof CdmBaseMathUnitTypeSchema>;
