import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';

export const CdmProductCommonScheduleDateRelativeToValuationDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToValuationDates'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      valuationDatesReference: z
        .array(
          z.lazy(
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
