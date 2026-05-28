import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

export const CdmProductCollateralIssuerNameSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerName']
  )(
    z.object({
      issuerName: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralIssuerName = z.infer<
  typeof CdmProductCollateralIssuerNameSchema
>;
