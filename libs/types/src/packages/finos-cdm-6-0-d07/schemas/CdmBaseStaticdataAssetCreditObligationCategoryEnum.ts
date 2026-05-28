import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/ObligationCategoryEnum'
    ]
  )(
    z.enum([
      'Bond',
      'BondOrLoan',
      'BorrowedMoney',
      'Loan',
      'Payment',
      'ReferenceObligationsOnly',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCreditObligationCategoryEnum = z.infer<
  typeof CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema
>;
