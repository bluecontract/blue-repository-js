import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonDebtClassEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtClassEnum']
  )(
    z.enum([
      'AssetBacked',
      'Convertible',
      'HolderConvertible',
      'HolderExchangeable',
      'IssuerConvertible',
      'IssuerExchangeable',
      'RegCap',
      'Structured',
      'Vanilla',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDebtClassEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtClassEnumSchema
>;
