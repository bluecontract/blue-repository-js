import { pascal } from '../../../../utils/pascal';

export function getSchemaName(typeName: string) {
  return `${pascal(typeName)}Schema`;
}
