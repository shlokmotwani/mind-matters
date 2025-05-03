import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addQuery(query) {
  try {
    await prisma.query.create({
      data: {
        fullName: query.fullName,
        email: query.email,
        contact: query.contact,
        message: query.message,
      },
    });
    return "success";
  } catch (e) {
    return new Error(e);
  }
}

async function getAllQueries() {
  const queries = await prisma.query.findMany();
  return queries;
}

export { addQuery, getAllQueries };
