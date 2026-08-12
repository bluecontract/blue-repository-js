import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';

const zod = z as any;

export const CdmEventPositionAggregationParametersSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AggregationParameters']
)(
  zod.object({
    dateTime: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    party: zod
      .array(
        zod.lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
      )
      .min(0)
      .optional(),
    positionStatus: zod
      .lazy(() => CdmEventPositionPositionStatusEnumSchema)
      .optional(),
    product: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
        )
      )
      .min(0)
      .optional(),
    productQualifier: zod.array(zod.string()).min(0).optional(),
    totalPosition: zod.boolean().optional(),
    tradeReference: zod
      .array(
        zod.lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeSchema)
      )
      .min(0)
      .optional(),
  })
);

export type CdmEventPositionAggregationParameters = z.infer<
  typeof CdmEventPositionAggregationParametersSchema
>;
