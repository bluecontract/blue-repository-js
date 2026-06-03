import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';

const zod = z as any;

export const CdmProductCommonScheduleStubPeriodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/StubPeriod']
)(
  zod.object({
    calculationPeriodDatesReference: zod.lazy(
      () =>
        CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
    ),
    description: zod.string().optional(),
    finalStub: zod.lazy(() => CdmProductAssetStubValueSchema).optional(),
    initialStub: zod.lazy(() => CdmProductAssetStubValueSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductCommonScheduleStubPeriod = z.infer<
  typeof CdmProductCommonScheduleStubPeriodSchema
>;
