import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetLoadTypeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/LoadTypeEnum']
)(
  z.enum([
    'BaseLoad',
    'BlockHours',
    'GasDay',
    'OffPeak',
    'Other',
    'PeakLoad',
    'Shaped',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetLoadTypeEnum = z.infer<
  typeof CdmProductAssetLoadTypeEnumSchema
>;
