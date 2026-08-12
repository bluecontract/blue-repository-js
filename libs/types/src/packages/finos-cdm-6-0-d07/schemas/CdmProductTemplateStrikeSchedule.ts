import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';

const zod = z as any;

export const CdmProductTemplateStrikeScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrikeSchedule']
)(
  zod.object({
    buyer: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    price: zod
      .lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
      )
      .optional(),
    seller: zod
      .lazy(() => CdmBaseStaticdataPartyPayerReceiverEnumSchema)
      .optional(),
  })
);

export type CdmProductTemplateStrikeSchedule = z.infer<
  typeof CdmProductTemplateStrikeScheduleSchema
>;
