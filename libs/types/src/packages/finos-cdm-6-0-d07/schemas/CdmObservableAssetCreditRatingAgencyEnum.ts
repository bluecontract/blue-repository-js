import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCreditRatingAgencyEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditRatingAgencyEnum']
  )(
    zod.enum([
      'AMBest',
      'CBRS',
      'DBRS',
      'Fitch',
      'Japanagency',
      'Moodys',
      'RatingAndInvestmentInformation',
      'StandardAndPoors',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditRatingAgencyEnum = z.infer<
  typeof CdmObservableAssetCreditRatingAgencyEnumSchema
>;
