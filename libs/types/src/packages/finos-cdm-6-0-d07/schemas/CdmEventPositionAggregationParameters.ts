import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';

export const CdmEventPositionAggregationParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AggregationParameters']
  )(
    z.object({
      dateTime: z.string(),
      description: z.string().optional(),
      name: z.string().optional(),
      party: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
          )
        )
        .min(0)
        .optional(),
      positionStatus: z
        .lazy(() => CdmEventPositionPositionStatusEnumSchema)
        .optional(),
      product: z
        .array(
          z.lazy(
            (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
          )
        )
        .min(0)
        .optional(),
      productQualifier: z.array(z.string()).min(0).optional(),
      totalPosition: z.boolean().optional(),
      tradeReference: z
        .array(
          z.lazy(() => CdmEventCommonMetafieldsReferenceWithMetaTradeSchema)
        )
        .min(0)
        .optional(),
    })
  );

export type CdmEventPositionAggregationParameters = z.infer<
  typeof CdmEventPositionAggregationParametersSchema
>;
