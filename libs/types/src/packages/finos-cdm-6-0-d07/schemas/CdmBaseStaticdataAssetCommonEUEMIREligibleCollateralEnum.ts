import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/EU_EMIR_EligibleCollateralEnum'
    ]
  )(
    z.enum([
      'EU_EMIRTypeA',
      'EU_EMIRTypeB',
      'EU_EMIRTypeC',
      'EU_EMIRTypeD',
      'EU_EMIRTypeE',
      'EU_EMIRTypeF',
      'EU_EMIRTypeG',
      'EU_EMIRTypeH',
      'EU_EMIRTypeI',
      'EU_EMIRTypeJ',
      'EU_EMIRTypeK',
      'EU_EMIRTypeL',
      'EU_EMIRTypeM',
      'EU_EMIRTypeN',
      'EU_EMIRTypeO',
      'EU_EMIRTypeP',
      'EU_EMIRTypeQ',
      'EU_EMIRTypeR',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema
>;
