import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

export const CdmProductTemplateStrikeScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrikeSchedule']
  )(
    z.object({
      buyer: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      price: z
        .lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
        .optional(),
      seller: z
        .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
        .optional(),
    })
  );

export type CdmProductTemplateStrikeSchedule = z.infer<
  typeof CdmProductTemplateStrikeScheduleSchema
>;
