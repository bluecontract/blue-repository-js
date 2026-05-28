import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
import { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';

export const CdmProductAssetDividendPaymentDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPaymentDate']
  )(
    z.object({
      description: z.string().optional(),
      dividendDate: z
        .lazy(
          () =>
            CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema
        )
        .optional(),
      dividendDateReference: z
        .lazy(() => CdmProductAssetDividendDateReferenceSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetDividendPaymentDate = z.infer<
  typeof CdmProductAssetDividendPaymentDateSchema
>;
