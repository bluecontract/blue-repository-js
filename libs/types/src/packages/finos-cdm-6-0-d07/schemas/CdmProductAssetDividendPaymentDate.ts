import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
import { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';

const zod = z as any;

export const CdmProductAssetDividendPaymentDateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPaymentDate']
)(
  zod.object({
    description: zod.string().optional(),
    dividendDate: zod
      .lazy(
        () =>
          CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema
      )
      .optional(),
    dividendDateReference: zod
      .lazy(() => CdmProductAssetDividendDateReferenceSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetDividendPaymentDate = z.infer<
  typeof CdmProductAssetDividendPaymentDateSchema
>;
