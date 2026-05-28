import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';

export const CdmProductCommonScheduleStubPeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/StubPeriod']
  )(
    z.object({
      calculationPeriodDatesReference: z.lazy(
        () =>
          CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
      ),
      description: z.string().optional(),
      finalStub: z.lazy(() => CdmProductAssetStubValueSchema).optional(),
      initialStub: z.lazy(() => CdmProductAssetStubValueSchema).optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleStubPeriod = z.infer<
  typeof CdmProductCommonScheduleStubPeriodSchema
>;
