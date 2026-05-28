import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';

export const CdmProductAssetDividendDateReferenceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendDateReference']
  )(
    z.object({
      dateReference: z.lazy(
        () => CdmProductAssetDividendDateReferenceEnumSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      paymentDateOffset: z.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
    })
  );

export type CdmProductAssetDividendDateReference = z.infer<
  typeof CdmProductAssetDividendDateReferenceSchema
>;
