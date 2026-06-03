import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';

const zod = z as any;

export const CdmBaseMathMoneyRangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MoneyRange']
)(
  zod.object({
    description: zod.string().optional(),
    lowerBound: zod.lazy(() => CdmBaseMathMoneyBoundSchema).optional(),
    name: zod.string().optional(),
    upperBound: zod.lazy(() => CdmBaseMathMoneyBoundSchema).optional(),
  })
);

export type CdmBaseMathMoneyRange = z.infer<typeof CdmBaseMathMoneyRangeSchema>;
