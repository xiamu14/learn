import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });
  try {
    const { sighting: sightingData } = req.body;
    const sighting = await prisma.sighting.create({
      data: {
        latitude: sightingData.latitude,
        longitude: sightingData.longitude,
      },
    });
    res.status(200);
    res.json({ data: sighting });
  } catch (error) {
    res.status(500);
    res.json({ error: error, msg: "Sorry unable to save sighting to database" });
  } finally {
    await prisma.$disconnect();
  }
}
