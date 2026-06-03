import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';

const zod = z as any;

export const CdmObservableEventDeterminationMethodologySchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/DeterminationMethodology']
  )(
    zod.object({
      averagingMethod: zod
        .lazy(() => CdmBaseMathAveragingCalculationMethodEnumSchema)
        .optional(),
      description: zod.string().optional(),
      determinationMethod: zod
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmObservableEventDeterminationMethodology = z.infer<
  typeof CdmObservableEventDeterminationMethodologySchema
>;
