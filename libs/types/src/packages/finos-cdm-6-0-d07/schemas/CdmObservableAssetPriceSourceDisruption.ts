import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';

export const CdmObservableAssetPriceSourceDisruptionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceSourceDisruption']
  )(
    z.object({
      description: z.string().optional(),
      fallbackReferencePrice: z.lazy(
        () => CdmObservableAssetFallbackReferencePriceSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetPriceSourceDisruption = z.infer<
  typeof CdmObservableAssetPriceSourceDisruptionSchema
>;
