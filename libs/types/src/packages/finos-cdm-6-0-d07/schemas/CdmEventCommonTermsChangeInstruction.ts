import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';

export const CdmEventCommonTermsChangeInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TermsChangeInstruction']
  )(
    z.object({
      adjustment: z
        .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
        .optional(),
      ancillaryParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      product: z
        .lazy(
          (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
        )
        .optional(),
    })
  );

export type CdmEventCommonTermsChangeInstruction = z.infer<
  typeof CdmEventCommonTermsChangeInstructionSchema
>;
