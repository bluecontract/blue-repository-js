import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';

const zod = z as any;

export const CdmObservableAssetPriceSourceDisruptionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceSourceDisruption']
  )(
    zod.object({
      description: zod.string().optional(),
      fallbackReferencePrice: zod.lazy(
        () => CdmObservableAssetFallbackReferencePriceSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmObservableAssetPriceSourceDisruption = z.infer<
  typeof CdmObservableAssetPriceSourceDisruptionSchema
>;
