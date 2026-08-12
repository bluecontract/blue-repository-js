import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetLoadTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/LoadTypeEnum']
)(
  zod.enum([
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
