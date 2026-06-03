import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSPackageSchema } from './MyOSPackage';

const zod = z as any;

export const InformUserToInstallMyOSPackageSchema: any = withTypeBlueId(
  blueIds['MyOS/Inform User To Install MyOS Package']
)(
  zod.object({
    description: zod.string().optional(),
    message: zod.string().optional(),
    name: zod.string().optional(),
    package: zod.lazy(() => MyOSPackageSchema).optional(),
    title: zod.string().optional(),
  })
);

export type InformUserToInstallMyOSPackage = z.infer<
  typeof InformUserToInstallMyOSPackageSchema
>;
