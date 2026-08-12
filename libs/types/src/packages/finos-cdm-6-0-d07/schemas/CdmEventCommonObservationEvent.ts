import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
import { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';

const zod = z as any;

export const CdmEventCommonObservationEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ObservationEvent']
)(
  zod.object({
    corporateAction: zod
      .lazy(() => CdmEventCommonCorporateActionSchema)
      .optional(),
    creditEvent: zod.lazy(() => CdmEventCommonCreditEventSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonObservationEvent = z.infer<
  typeof CdmEventCommonObservationEventSchema
>;
