import { ClientOptions, Transport } from '@nestjs/microservices';

import { ReflectionService } from '@grpc/reflection';
import { join } from 'path';

export const options: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'employee', // ['employee', 'employee2']
    protoPath: join(__dirname, './employee/employee.proto'), // ['./employee/employee.proto', './employee/employee2.proto']
    url: '0.0.0.0:50051',
    onLoadPackageDefinition: (pkg, server) => {
      new ReflectionService(pkg).addToServer(server);
    },
  },
};
