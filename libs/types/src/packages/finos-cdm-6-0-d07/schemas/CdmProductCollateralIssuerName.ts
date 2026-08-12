import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';

const zod = z as any;

export const CdmProductCollateralIssuerNameSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/IssuerName']
)(
  zod.object({
    issuerName: zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralIssuerName = z.infer<
  typeof CdmProductCollateralIssuerNameSchema
>;
