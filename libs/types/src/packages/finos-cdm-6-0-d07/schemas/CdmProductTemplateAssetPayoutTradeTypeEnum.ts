import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateAssetPayoutTradeTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AssetPayoutTradeTypeEnum']
  )(
    zod.enum(['Buy/Sell-Back', 'Repo'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateAssetPayoutTradeTypeEnum = z.infer<
  typeof CdmProductTemplateAssetPayoutTradeTypeEnumSchema
>;
