import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';

const zod = z as any;

export const CdmProductCommonScheduleDateRelativeToValuationDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToValuationDates'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      valuationDatesReference: zod
        .array(
          zod.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema
          )
        )
        .min(1)
        .optional(),
    })
  );

export type CdmProductCommonScheduleDateRelativeToValuationDates = z.infer<
  typeof CdmProductCommonScheduleDateRelativeToValuationDatesSchema
>;
