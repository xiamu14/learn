import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });
  try {
    const sightings = await prisma.sighting.findMany();
    res.status(200);
    res.json({ data: sightings });
  } catch (error) {
    res.status(500);
    res.json({ error: error, msg: "Sorry unable to find  sighting" });
  } finally {
    await prisma.$disconnect();
  }
}
