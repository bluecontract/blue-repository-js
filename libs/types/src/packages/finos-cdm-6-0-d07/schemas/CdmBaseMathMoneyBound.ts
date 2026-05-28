import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmBaseMathMoneyBoundSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MoneyBound']
)(
  z.object({
    description: z.string().optional(),
    inclusive: z.boolean(),
    money: z.lazy(() => CdmObservableAssetMoneySchema),
    name: z.string().optional(),
  })
);

export type CdmBaseMathMoneyBound = z.infer<typeof CdmBaseMathMoneyBoundSchema>;
