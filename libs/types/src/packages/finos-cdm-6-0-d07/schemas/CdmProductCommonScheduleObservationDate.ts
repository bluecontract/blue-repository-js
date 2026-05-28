import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleObservationDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationDate']
  )(
    z.object({
      adjustedDate: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      observationReference: z.string().optional(),
      unadjustedDate: z.string().optional(),
      weight: z.number().optional(),
    })
  );

export type CdmProductCommonScheduleObservationDate = z.infer<
  typeof CdmProductCommonScheduleObservationDateSchema
>;
