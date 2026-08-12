import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';

const zod = z as any;

export const CdmProductCollateralEligibleCollateralSpecificationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/EligibleCollateralSpecification'
    ]
  )(
    zod.object({
      counterparty: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(0)
        .max(2)
        .optional(),
      criteria: zod
        .array(
          zod.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
        )
        .min(1)
        .optional(),
      description: zod.string().optional(),
      identifier: zod
        .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      name: zod.string().optional(),
      party: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .max(2)
        .optional(),
      partyRole: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCollateralEligibleCollateralSpecification = z.infer<
  typeof CdmProductCollateralEligibleCollateralSpecificationSchema
>;
