import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/SpecialPurposeVehicleIssuerType'
    ]
  )(
    zod.object({
      creditRisk: zod
        .lazy(() => CdmBaseStaticdataAssetCommonCreditRiskEnumSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType =
  z.infer<
    typeof CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema
  >;
