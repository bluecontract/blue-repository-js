import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetDividendEntitlementEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendEntitlementEnum']
)(
  zod.enum(['ExDate', 'RecordDate'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetDividendEntitlementEnum = z.infer<
  typeof CdmProductAssetDividendEntitlementEnumSchema
>;
