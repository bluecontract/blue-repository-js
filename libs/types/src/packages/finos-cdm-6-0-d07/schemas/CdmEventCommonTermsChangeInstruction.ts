import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';

const zod = z as any;

export const CdmEventCommonTermsChangeInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TermsChangeInstruction']
)(
  zod.object({
    adjustment: zod
      .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
      .optional(),
    ancillaryParty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    product: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema)
      .optional(),
  })
);

export type CdmEventCommonTermsChangeInstruction = z.infer<
  typeof CdmEventCommonTermsChangeInstructionSchema
>;
