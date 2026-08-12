import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';

const zod = z as any;

export const CdmBaseDatetimeBusinessDayAdjustmentsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessDayAdjustments']
)(
  zod.object({
    businessCenters: zod
      .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
      .optional(),
    businessDayConvention: zod.lazy(
      () => CdmBaseDatetimeBusinessDayConventionEnumSchema
    ),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseDatetimeBusinessDayAdjustments = z.infer<
  typeof CdmBaseDatetimeBusinessDayAdjustmentsSchema
>;
