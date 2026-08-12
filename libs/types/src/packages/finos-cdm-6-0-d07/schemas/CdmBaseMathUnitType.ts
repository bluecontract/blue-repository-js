import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseMathUnitTypeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/UnitType']
)(
  zod.object({
    capacityUnit: zod.lazy(() => CdmBaseMathCapacityUnitEnumSchema).optional(),
    currency: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    description: zod.string().optional(),
    financialUnit: zod
      .lazy(() => CdmBaseMathFinancialUnitEnumSchema)
      .optional(),
    name: zod.string().optional(),
    weatherUnit: zod.lazy(() => CdmBaseMathWeatherUnitEnumSchema).optional(),
  })
);

export type CdmBaseMathUnitType = z.infer<typeof CdmBaseMathUnitTypeSchema>;
