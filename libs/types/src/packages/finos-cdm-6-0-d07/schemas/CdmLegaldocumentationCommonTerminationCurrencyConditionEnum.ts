import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/TerminationCurrencyConditionEnum'
    ]
  )(
    z.enum([
      'FreelyAvailable',
      'PaymentsDue',
      'PaymentsDueAndFreelyAvailable',
      'Specified',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonTerminationCurrencyConditionEnum =
  z.infer<
    typeof CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema
  >;
