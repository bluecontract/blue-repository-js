import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
import { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';

export const CdmEventCommonCounterpartyPositionBusinessEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/common/CounterpartyPositionBusinessEvent'
    ]
  )(
    z.object({
      after: z
        .array(z.lazy(() => CdmEventCommonCounterpartyPositionStateSchema))
        .min(0)
        .optional(),
      corporateActionIntent: z
        .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      eventDate: z.string().optional(),
      intent: z.lazy(() => CdmEventCommonPositionEventIntentEnumSchema),
      name: z.string().optional(),
      packageInformation: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
        .optional(),
    })
  );

export type CdmEventCommonCounterpartyPositionBusinessEvent = z.infer<
  typeof CdmEventCommonCounterpartyPositionBusinessEventSchema
>;
