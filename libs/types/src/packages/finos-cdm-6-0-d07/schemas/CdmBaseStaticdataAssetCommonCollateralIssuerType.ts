import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
import { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralIssuerType'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      issuerType: zod.lazy(
        () => CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema
      ),
      name: zod.string().optional(),
      quasiGovernmentType: zod
        .lazy(() => CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema)
        .optional(),
      regionalGovernmentType: zod
        .lazy(
          () => CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema
        )
        .optional(),
      specialPurposeVehicleType: zod
        .lazy(
          () =>
            CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema
        )
        .optional(),
      supraNationalType: zod
        .lazy(
          () => CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema
        )
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCollateralIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
>;
