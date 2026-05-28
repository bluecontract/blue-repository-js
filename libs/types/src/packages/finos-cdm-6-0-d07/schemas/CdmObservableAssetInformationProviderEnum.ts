import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetInformationProviderEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InformationProviderEnum']
  )(
    z.enum([
      'AssocBanksSingapore',
      'BancoCentralChile',
      'BankOfCanada',
      'BankOfEngland',
      'BankOfJapan',
      'Bloomberg',
      'EuroCentralBank',
      'FHLBSF',
      'FederalReserve',
      'ICESWAP',
      'ISDA',
      'Refinitiv',
      'ReserveBankAustralia',
      'ReserveBankNewZealand',
      'Reuters',
      'SAFEX',
      'TOKYOSWAP',
      'Telerate',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetInformationProviderEnum = z.infer<
  typeof CdmObservableAssetInformationProviderEnumSchema
>;
