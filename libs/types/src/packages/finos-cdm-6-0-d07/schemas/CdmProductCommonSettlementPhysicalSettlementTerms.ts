import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
import { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';

const zod = z as any;

export const CdmProductCommonSettlementPhysicalSettlementTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/PhysicalSettlementTerms'
    ]
  )(
    zod.object({
      clearedPhysicalSettlement: zod.boolean().optional(),
      deliverableObligations: zod
        .lazy(() => CdmProductCommonSettlementDeliverableObligationsSchema)
        .optional(),
      description: zod.string().optional(),
      escrow: zod.boolean().optional(),
      name: zod.string().optional(),
      physicalSettlementPeriod: zod
        .lazy(() => CdmProductCommonSettlementPhysicalSettlementPeriodSchema)
        .optional(),
      predeterminedClearingOrganizationParty: zod
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      sixtyBusinessDaySettlementCap: zod.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementPhysicalSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementPhysicalSettlementTermsSchema
>;
