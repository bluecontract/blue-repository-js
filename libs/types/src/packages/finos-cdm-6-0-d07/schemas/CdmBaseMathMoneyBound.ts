import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmBaseMathMoneyBoundSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MoneyBound']
)(
  zod.object({
    description: zod.string().optional(),
    inclusive: zod.boolean(),
    money: zod.lazy(() => CdmObservableAssetMoneySchema),
    name: zod.string().optional(),
  })
);

export type CdmBaseMathMoneyBound = z.infer<typeof CdmBaseMathMoneyBoundSchema>;
