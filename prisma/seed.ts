import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Canon R',
      price: 3000,
      description: 'Professional camera, we technology',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nikon D50',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Leica q2',
      price: 5000,
      description: 'Small, compact, innovative',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'John Doe',
      address: '123 Main Street, London',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'TThomas Jefferson',
      address: 'Baker Street 12B, New York',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      name: 'Jane Doe',
      address: 'Baker Street 12B, Philadelphia',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map(async (product) => {
      try {
        await db.product.upsert({
          where: { id: product.id },
          update: product,
          create: product,
        });
      } catch (error) {
        console.error('Error', error);
      }
    }),
  );

  await Promise.all(
    getOrders().map(async (order) => {
      try {
        await db.order.upsert({
          where: { id: order.id },
          update: order,
          create: order,
        });
      } catch (error) {
        console.error('Error', error);
      }
    }),
  );
  await Promise.all(
    getClients().map(async (client) => {
      try {
        await db.client.upsert({
          where: { id: client.id },
          update: client,
          create: client,
        });
      } catch (error) {
        console.error('Error', error);
      }
    }),
  );
}
seed();
