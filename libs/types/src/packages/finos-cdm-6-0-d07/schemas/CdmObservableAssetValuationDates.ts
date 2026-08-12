import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';

const zod = z as any;

export const CdmObservableAssetValuationDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationDates']
)(
  zod.object({
    description: zod.string().optional(),
    finalValuationDate: zod.lazy(
      () => CdmObservableAssetPerformanceValuationDatesSchema
    ),
    initialValuationDate: zod
      .lazy(() => CdmObservableAssetPerformanceValuationDatesSchema)
      .optional(),
    interimValuationDate: zod
      .lazy(() => CdmObservableAssetPerformanceValuationDatesSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetValuationDates = z.infer<
  typeof CdmObservableAssetValuationDatesSchema
>;
