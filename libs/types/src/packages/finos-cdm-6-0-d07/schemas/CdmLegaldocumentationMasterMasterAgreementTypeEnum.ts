import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementTypeEnum'
    ]
  )(
    zod.enum([
      'AFB',
      'Bespoke',
      'CMA',
      'CMOF',
      'EEIPower',
      'EFETElectricity',
      'EFETGas',
      'EMA',
      'FBF',
      'GMRA',
      'GMSLA',
      'GTMA',
      'GasEDI',
      'German',
      'ICOM',
      'IETA-ERPA',
      'IETA-ETMA',
      'IETA-IETMA',
      'IFEMA',
      'IFEOMA',
      'ISDAFIA-CDEA',
      'ISDAIIFM-TMA',
      'ISDAMaster',
      'JSCC',
      'LBMA',
      'LEAP',
      'MCPSA',
      'NAESBGas',
      'NBP',
      'RussianDerivatives',
      'RussianRepo',
      'SCoTA',
      'Swiss',
      'TTF',
      'ZBT',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationMasterMasterAgreementTypeEnum = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema
>;
