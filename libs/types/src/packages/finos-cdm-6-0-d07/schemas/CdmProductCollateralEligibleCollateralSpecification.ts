import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';

export const CdmProductCollateralEligibleCollateralSpecificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralSpecification'
    ]
  )(
    z.object({
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(0)
        .max(2)
        .optional(),
      criteria: z
        .array(
          z.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      identifier: z
        .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
      party: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .max(2)
        .optional(),
      partyRole: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCollateralEligibleCollateralSpecification = z.infer<
  typeof CdmProductCollateralEligibleCollateralSpecificationSchema
>;
