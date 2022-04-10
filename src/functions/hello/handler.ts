import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const mult = 7;
  const catAge = mult * event.body.age;
  console.log('received event ', JSON.stringify(event, null, 2))
  return formatJSONResponse({
    message: catAge,
    input: event
  });
}

export const main = middyfy(hello);
