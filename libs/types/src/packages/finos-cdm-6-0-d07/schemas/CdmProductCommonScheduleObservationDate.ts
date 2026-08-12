import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleObservationDateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationDate']
  )(
    zod.object({
      adjustedDate: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationReference: zod.string().optional(),
      unadjustedDate: zod.string().optional(),
      weight: zod.number().optional(),
    })
  );

export type CdmProductCommonScheduleObservationDate = z.infer<
  typeof CdmProductCommonScheduleObservationDateSchema
>;
