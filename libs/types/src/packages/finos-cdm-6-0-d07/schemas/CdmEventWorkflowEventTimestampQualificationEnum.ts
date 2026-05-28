import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventWorkflowEventTimestampQualificationEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/EventTimestampQualificationEnum'
    ]
  )(
    z.enum([
      'clearingConfirmationDateTime',
      'clearingDateTime',
      'clearingReceiptDateTime',
      'clearingSubmissionDateTime',
      'confirmationDateTime',
      'eventCreationDateTime',
      'eventExpirationDateTime',
      'eventProcessingDateTime',
      'eventSentDateTime',
      'eventSubmittedDateTime',
      'executionDateTime',
      'transactionCreationDateTime',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventWorkflowEventTimestampQualificationEnum = z.infer<
  typeof CdmEventWorkflowEventTimestampQualificationEnumSchema
>;
