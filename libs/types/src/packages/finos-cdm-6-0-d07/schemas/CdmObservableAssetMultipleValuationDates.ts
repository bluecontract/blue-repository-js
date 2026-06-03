import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetMultipleValuationDatesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/MultipleValuationDates']
  )(
    zod.object({
      businessDays: zod.number().optional(),
      businessDaysThereafter: zod.number().optional(),
      name: zod.string().optional(),
      numberValuationDates: zod.number().optional(),
    })
  );

export type CdmObservableAssetMultipleValuationDates = z.infer<
  typeof CdmObservableAssetMultipleValuationDatesSchema
>;
