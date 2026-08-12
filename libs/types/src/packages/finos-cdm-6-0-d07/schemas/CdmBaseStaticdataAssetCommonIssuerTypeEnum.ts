import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/IssuerTypeEnum']
  )(
    zod.enum([
      'Corporate',
      'Fund',
      'QuasiGovernment',
      'RegionalGovernment',
      'SovereignCentralBank',
      'SpecialPurposeVehicle',
      'SupraNational',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonIssuerTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema
>;
