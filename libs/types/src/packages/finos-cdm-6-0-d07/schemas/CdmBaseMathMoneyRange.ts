import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';

export const CdmBaseMathMoneyRangeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/MoneyRange']
)(
  z.object({
    description: z.string().optional(),
    lowerBound: z.lazy(() => CdmBaseMathMoneyBoundSchema).optional(),
    name: z.string().optional(),
    upperBound: z.lazy(() => CdmBaseMathMoneyBoundSchema).optional(),
  })
);

export type CdmBaseMathMoneyRange = z.infer<typeof CdmBaseMathMoneyRangeSchema>;
