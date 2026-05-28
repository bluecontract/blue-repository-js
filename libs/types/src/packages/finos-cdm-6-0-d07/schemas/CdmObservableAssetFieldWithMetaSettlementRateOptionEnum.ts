import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaSettlementRateOptionEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmObservableAssetSettlementRateOptionEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaSettlementRateOptionEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
>;
