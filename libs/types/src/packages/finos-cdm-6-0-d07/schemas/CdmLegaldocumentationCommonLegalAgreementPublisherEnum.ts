import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/LegalAgreementPublisherEnum'
    ]
  )(
    zod.enum([
      'AFB',
      'BNYM',
      'EMTA',
      'ICMA',
      'ISDA',
      'ISDAClearstream',
      'ISDAEuroclear',
      'ISLA',
      'JPMorgan',
      'TheFXCommittee',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonLegalAgreementPublisherEnum = z.infer<
  typeof CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema
>;
