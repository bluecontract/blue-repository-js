import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/UK_EMIR_EligibleCollateralEnum'
    ]
  )(
    zod.enum([
      'UK_EMIRTypeA',
      'UK_EMIRTypeB',
      'UK_EMIRTypeC',
      'UK_EMIRTypeD',
      'UK_EMIRTypeE',
      'UK_EMIRTypeF',
      'UK_EMIRTypeG',
      'UK_EMIRTypeH',
      'UK_EMIRTypeI',
      'UK_EMIRTypeJ',
      'UK_EMIRTypeK',
      'UK_EMIRTypeL',
      'UK_EMIRTypeM',
      'UK_EMIRTypeN',
      'UK_EMIRTypeO',
      'UK_EMIRTypeP',
      'UK_EMIRTypeQ',
      'UK_EMIRTypeR',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema
>;
