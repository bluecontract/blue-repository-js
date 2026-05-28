import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
import { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';

export const CdmProductCommonSettlementPhysicalSettlementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PhysicalSettlementTerms'
    ]
  )(
    z.object({
      clearedPhysicalSettlement: z.boolean().optional(),
      deliverableObligations: z
        .lazy(() => CdmProductCommonSettlementDeliverableObligationsSchema)
        .optional(),
      description: z.string().optional(),
      escrow: z.boolean().optional(),
      name: z.string().optional(),
      physicalSettlementPeriod: z
        .lazy(() => CdmProductCommonSettlementPhysicalSettlementPeriodSchema)
        .optional(),
      predeterminedClearingOrganizationParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      sixtyBusinessDaySettlementCap: z.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementPhysicalSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementPhysicalSettlementTermsSchema
>;
