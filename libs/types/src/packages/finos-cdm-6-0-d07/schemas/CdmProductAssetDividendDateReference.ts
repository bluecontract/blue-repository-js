import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';

const zod = z as any;

export const CdmProductAssetDividendDateReferenceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendDateReference']
)(
  zod.object({
    dateReference: zod.lazy(
      () => CdmProductAssetDividendDateReferenceEnumSchema
    ),
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentDateOffset: zod.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
  })
);

export type CdmProductAssetDividendDateReference = z.infer<
  typeof CdmProductAssetDividendDateReferenceSchema
>;
