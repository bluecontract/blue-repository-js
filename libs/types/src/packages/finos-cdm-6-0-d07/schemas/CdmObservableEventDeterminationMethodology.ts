import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';

export const CdmObservableEventDeterminationMethodologySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/DeterminationMethodology']
  )(
    z.object({
      averagingMethod: z
        .lazy(() => CdmBaseMathAveragingCalculationMethodEnumSchema)
        .optional(),
      description: z.string().optional(),
      determinationMethod: z
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableEventDeterminationMethodology = z.infer<
  typeof CdmObservableEventDeterminationMethodologySchema
>;
