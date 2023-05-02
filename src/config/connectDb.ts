import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	log: ["error", "warn"],
});

async function connectPrisma(message: string) {
	await prisma.$connect();

	console.log(message);
}

connectPrisma("Connection successful!")
	.then(() => {
		prisma.$disconnect();
	})
	.catch((e) => {
		console.error(e);
		prisma.$disconnect();
	});

export { prisma };
