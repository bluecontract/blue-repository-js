import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';

export const CdmObservableAssetValuationDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationDates']
  )(
    z.object({
      description: z.string().optional(),
      finalValuationDate: z.lazy(
        () => CdmObservableAssetPerformanceValuationDatesSchema
      ),
      initialValuationDate: z
        .lazy(() => CdmObservableAssetPerformanceValuationDatesSchema)
        .optional(),
      interimValuationDate: z
        .lazy(() => CdmObservableAssetPerformanceValuationDatesSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetValuationDates = z.infer<
  typeof CdmObservableAssetValuationDatesSchema
>;
