import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
import { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';

export const CdmEventCommonObservationEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ObservationEvent']
  )(
    z.object({
      corporateAction: z
        .lazy(() => CdmEventCommonCorporateActionSchema)
        .optional(),
      creditEvent: z.lazy(() => CdmEventCommonCreditEventSchema).optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonObservationEvent = z.infer<
  typeof CdmEventCommonObservationEventSchema
>;
