import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetMultipleValuationDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleValuationDates']
  )(
    z.object({
      businessDays: z.number().optional(),
      businessDaysThereafter: z.number().optional(),
      name: z.string().optional(),
      numberValuationDates: z.number().optional(),
    })
  );

export type CdmObservableAssetMultipleValuationDates = z.infer<
  typeof CdmObservableAssetMultipleValuationDatesSchema
>;
