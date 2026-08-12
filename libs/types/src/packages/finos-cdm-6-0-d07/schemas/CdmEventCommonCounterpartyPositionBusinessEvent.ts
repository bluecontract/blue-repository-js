import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
import { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';

const zod = z as any;

export const CdmEventCommonCounterpartyPositionBusinessEventSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/common/CounterpartyPositionBusinessEvent'
    ]
  )(
    zod.object({
      after: zod
        .array(zod.lazy(() => CdmEventCommonCounterpartyPositionStateSchema))
        .min(0)
        .optional(),
      corporateActionIntent: zod
        .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
        .optional(),
      description: zod.string().optional(),
      effectiveDate: zod.string().optional(),
      eventDate: zod.string().optional(),
      intent: zod.lazy(() => CdmEventCommonPositionEventIntentEnumSchema),
      name: zod.string().optional(),
      packageInformation: zod
        .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
        .optional(),
    })
  );

export type CdmEventCommonCounterpartyPositionBusinessEvent = z.infer<
  typeof CdmEventCommonCounterpartyPositionBusinessEventSchema
>;
