import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/TerminationCurrencyConditionEnum'
    ]
  )(
    zod.enum([
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
