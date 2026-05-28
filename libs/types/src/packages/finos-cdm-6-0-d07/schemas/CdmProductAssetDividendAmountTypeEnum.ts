import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetDividendAmountTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendAmountTypeEnum']
  )(
    z.enum([
      'AsSpecifiedInMasterConfirmation',
      'ExAmount',
      'PaidAmount',
      'RecordAmount',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetDividendAmountTypeEnum = z.infer<
  typeof CdmProductAssetDividendAmountTypeEnumSchema
>;
