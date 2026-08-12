import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaSettlementRateOptionEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableAssetSettlementRateOptionEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaSettlementRateOptionEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
>;
