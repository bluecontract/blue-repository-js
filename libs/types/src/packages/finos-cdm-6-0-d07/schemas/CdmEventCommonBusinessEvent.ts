import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
import { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';

const zod = z as any;

export const CdmEventCommonBusinessEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/BusinessEvent']
)(
  zod.object({
    after: zod
      .array(zod.lazy(() => CdmEventCommonTradeStateSchema))
      .min(0)
      .optional(),
    corporateActionIntent: zod
      .lazy(() => CdmEventCommonCorporateActionTypeEnumSchema)
      .optional(),
    description: zod.string().optional(),
    effectiveDate: zod.string().optional(),
    eventDate: zod.string().optional(),
    eventQualifier: zod.string().optional(),
    instruction: zod
      .array(zod.lazy(() => CdmEventCommonInstructionSchema))
      .min(0)
      .optional(),
    intent: zod.lazy(() => CdmEventCommonEventIntentEnumSchema).optional(),
    name: zod.string().optional(),
    packageInformation: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
      .optional(),
  })
);

export type CdmEventCommonBusinessEvent = z.infer<
  typeof CdmEventCommonBusinessEventSchema
>;
